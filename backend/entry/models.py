from unittest.util import _MAX_LENGTH
from django.db import models

class Entry(models.Model):
    habit = models.CharField(max_length=100)
    date = models.DateField()
    unit = models.IntegerField()
