from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Habit
from .serializers import HabitSerializer

@api_view(['GET'])
def habit_list(request):
    if request.method == 'GET':
        habit = Habit.objects.all()
        serializer = HabitSerializer(habit, many=True)
        return Response(serializer.data)