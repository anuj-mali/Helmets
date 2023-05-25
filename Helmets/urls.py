from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('khalti/', include('khalti.urls')),
    path('store/', include('store.urls')),
]
