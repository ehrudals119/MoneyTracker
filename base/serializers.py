from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = '__all__'