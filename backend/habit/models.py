from django.db import models

class Habit(models.Model):
    name = models.CharField(max_length=100)
    unit = models.CharField(max_length=100)