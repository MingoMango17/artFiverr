from django.contrib.auth.models import Group
from .models import appUser
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = appUser
        fields = ['url', 'username', 'email', 'user_type']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']