from rest_framework import viewsets, permissions
from .models import UserAssignment
from .serializers import UserAssignmentSerializer

class UserAssignmentViewSet(viewsets.ModelViewSet):
    queryset = UserAssignment.objects.all()
    serializer_class = UserAssignmentSerializer
    permission_classes = [permissions.IsAuthenticated]
