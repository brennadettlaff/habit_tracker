from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import Entry
from .serializers import EntrySerializer

@api_view(['GET'])
def all_entries(request):
    if request.method == 'GET':
        entry = Entry.objects.all()
        serializer = EntrySerializer(entry, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def entry_list(request, habit_id):
    if request.method == 'GET':
        entry = Entry.objects.filter(habit_id=habit_id)
        serializer = EntrySerializer(entry, many=True)
        return Response(serializer.data)
