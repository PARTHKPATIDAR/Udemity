from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api/users/', include('Users.urls')),
    path('api/assignments/', include('Assignments.urls')),
    path('api/grades/', include('Grades.urls')),
    path('api/userassignments/', include('UserAssignments.urls')),
    path('api/roles/', include('Roles.urls')),
]
