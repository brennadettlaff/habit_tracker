from rest_framework import serializers
from .models import Entry

class EntrySerializer(serializers.EntrySerializer):
    class Meta:
        model = Entry
        fields = ['habit_id', 'date', 'amount']

    habit_id = serializers.IntegerField(write_only=True)