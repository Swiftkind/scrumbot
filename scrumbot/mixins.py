from rest_framework.response import Response
from accounts.models import User, Team
from scrum.models import Log
from django.http import QueryDict
import json

class CRUDMixin(object):
    """
    Mixin with CRUD functions
    """

    def create(self, passed_data, passed_model, passed_serializer):
        """
        function that accepts: POST data, model, serializer
        creates a model object and adds it to the db
        returns response status
        """
        serializer = passed_serializer(data=passed_data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=201)
        return Response(serializer.errors, status=400)

    def list_all(self, passed_model, passed_serializer):
        """
        function that accepts: model, serializer
        returns complete list of serialized data of passed model
        """
        model_data = passed_model.objects.all()
        serializer = passed_serializer(model_data, many=True)
        return Response(serializer.data, status=200)

    def list_by(self, passed_data, passed_serializer):
        serializer = passed_serializer(passed_data, many=True)
        return Response(serializer.data, status=200)

    def update_object(self, passed_data, model_id, passed_serializer):
        serializer = passed_serializer(data=passed_data)
        if serializer.is_valid():
            serializer.update(model_id)
            return Response(serializer.data,status=200)
        return Response(status=400)


class ParseMixin(object):
    """
    Mixin with parse functions
    """

    def parseData(self, data):
        data = data.copy()
        return data
        
    def parseStringData(self, data):
        message = data['text']
        return message.split('.')
