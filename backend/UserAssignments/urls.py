from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserAssignmentViewSet

router = DefaultRouter()
router.register(r'userassignments', UserAssignmentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
