# Additions for tagging
# from tagging.views import TaggedObjectList
# from django.conf.urls import url
# from .models import Blog

# Old ------
from rest_framework import routers
from .api import BlogViewSet

router = routers.DefaultRouter()
router.register('',BlogViewSet,'blogs')

urlpatterns = router.urls

# urlpatterns += [
#     url(r'^tag/(?P<tag>[^/]+(?u))/$',TaggedObjectList.as_view(model=Blog, paginate_by=10, allow_empty=True), name='blog_tag_detail')
# ]

