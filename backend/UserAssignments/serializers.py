from rest_framework import serializers
from .models import UserAssignment
class UserAssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAssignment
        fields = ['id', 'user', 'assignment', 'created_at', 'updated_at']