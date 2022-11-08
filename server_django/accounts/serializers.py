from rest_framework import serializers
from .models import Account


class AccountSerializer(serializers.ModelSerializer):
  class Meta:
    model = Account
    fields = ['email', 'given_name', 'other_name']
    # 'all'
    # exclude = ['id', 'password']
