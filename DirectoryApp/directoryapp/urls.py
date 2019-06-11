
from django.contrib import admin
from django.urls import path, include, re_path
from tags.api import PopularTagsView
from django.conf import settings
from django.conf.urls.static import static

admin.site.site_header = "ITblogs.es Administration"
admin.site.site_title = "ITblogs.es"
admin.site.index_title = "Welcome to ITblogs.es Portal"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    # path('api/blogs/', include('blogs.urls')),
    re_path(r'^api/blogs/',include("blogs.urls")),
    path('api/podcasts/', include('podcasts.urls')),
    path('api/tags/', include('tags.urls')),
    path('api/popular/', PopularTagsView.as_view(), name='popular-tags-view'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# if settings.DEBUG: 
#     urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
