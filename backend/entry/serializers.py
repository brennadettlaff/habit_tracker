from  rest_framework import serializers
from .models import Entry

class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = ['id', 'habit_id', 'date', 'amount']

    habit_id = serializers.IntegerField(write_only=True)