import requests

from django.shortcuts import render
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings

from accounts.models import User
from accounts.serializers import UserSerializer
from scrumbot.mixins import CRUDMixin, SlackMixin

from .models import Timesheet
from .serializers import TimesheetSerializer
from django.utils import timezone


class TimeSheetAPI(ViewSet, SlackMixin, CRUDMixin):
    """ TimeSheet API
    """
    serializer_class = TimesheetSerializer
      
    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def time_in(self, *args, **kwargs):
        data = self.request.data
        slack_user = data.get('event').get('user')
        msg = data.get('event').get('text', None)
        if msg is not None:
            try:
                user = User.objects.get(slack_id=slack_user)
            except User.DoesNotExist:
                api_params = settings.SLACK_API_TOKEN+'&user='+slack_user
                slack_data = self.get_slack_method(settings.SLACK_API_USERS_INFO, api_params)
                user_data = {
                    'username': slack_data['user']['name'],
                    'slack_id': slack_user
                }
                user = self.create(user_data, User, UserSerializer)
            login_keywords = ['in', 'login', 'timein', 'checkin']
            logout_keywords = ['out', 'checkout', 'timeout', 'logout']
            login = [s for s in login_keywords if s in msg.lower()]
            logout = [s for s in logout_keywords if s in msg.lower()]
            if login:
                self._checkin(user)
            elif logout:
                self._checkout(user)
            else:
                self.send_message(settings.SLACK_BOT_MESSAGE['error'])
        return Response(data, status=200)

    def time_list(self, *args, **kwargs):
        timesheets = Timesheet.objects.all().order_by('-time_in')
        serializer = self.serializer_class(timesheets, many=True)
        return Response(serializer.data, status=200)

    def _checkin(self, user):
        work_hours = timezone.now() + timezone.timedelta(hours=14)
        timesheet = Timesheet.objects.filter(user=user, time_in__lt=work_hours)
        if timesheet.exists():
            self.send_message("You've already punched in today. Type `out` to punch out.")
        else:
            timesheet = Timesheet(user=user)
            timesheet.save()
            self.send_message(settings.SLACK_BOT_MESSAGE['punchin'])

    def _checkout(self, user):
        work_hours = timezone.now() + timezone.timedelta(hours=14)
        timesheet = Timesheet.objects.filter(user=user, time_in__lt=work_hours)
        msg = "You've haven't checkin today. Type `checkin` to punch in."
        if timesheet.exists():
            time = timesheet[0]
            if not time.completed:
                time.time_out = timezone.now()
                time.completed = True
                time.save()
                msg = settings.SLACK_BOT_MESSAGE['punchout']
            else: 
                msg = "You've already checkout today. Try checkin tomorrow. Type `timesheet` to view your timesheet for the day."
        self.send_message(msg)