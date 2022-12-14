from django.db import models
from habit.models import Habit

class Entry(models.Model):
    habit = models.ForeignKey(Habit, on_delete=models.CASCADE)
    date = models.DateField()
    amount = models.IntegerField()
