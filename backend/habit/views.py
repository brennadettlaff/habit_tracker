from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import Habit
from .serializers import HabitSerializer

@api_view(['GET', 'POST'])
def habit_list(request):
    if request.method == 'GET':
        habit = Habit.objects.all()
        serializer = HabitSerializer(habit, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = HabitSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
@api_view(['GET'])
def habit_detail(request, pk):
    habit = get_object_or_404(Habit, pk=pk)
    if request.method == 'GET':
        serializer = HabitSerializer(habit)
        return Response(serializer.data)