from rest_framework import serializers
from .models import Timesheet

class TimesheetSerializer(serializers.ModelSerializer):
    """ Timesheet Serializer
    """ 
    is_late = serializers.SerializerMethodField()
    
    def get_is_late(self, obj):
        return obj.is_late

    class Meta:
        model = Timesheet
        fields = ('user', 'time_in', 'time_out', 'is_late')