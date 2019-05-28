
from django.contrib import admin
from django.urls import path, include, re_path

admin.site.site_header = "ITblogs.es Administration"
admin.site.site_title = "ITblogs.es"
admin.site.index_title = "Welcome to ITblogs.es Portal"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    # path('api/blogs/', include('blogs.urls')),
    re_path(r'^api/blogs/',include("blogs.urls")),
    path('api/podcasts/', include('podcasts.urls')),
    path('api/tags/', include('tags.urls'))
]
