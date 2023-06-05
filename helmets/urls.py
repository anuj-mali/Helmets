from django.conf.urls.static import static
from django.conf import settings

from django.contrib import admin
from django.urls import path, include

import debug_toolbar

admin.site.site_header = 'Helmets Admin Dashboard'
admin.site.index_title = 'Admin'

urlpatterns = [
    path('__debug__/', include(debug_toolbar.urls)),
    path('admin/', admin.site.urls),
    path('store/', include('store.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('khalti/', include('khalti.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
