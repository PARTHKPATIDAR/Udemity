from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('users/', UserViewSet.as_view({'get': 'users_view', 'post': 'users_view'}), name='users_view'),
]
