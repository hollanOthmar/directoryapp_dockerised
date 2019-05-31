from rest_framework import routers
from .api import TagViewSet
from django.urls import path

router = routers.DefaultRouter()
router.register('',TagViewSet,'tags')

urlpatterns = router.urls

# urlpatterns += [path('popular/', PopularTagsView.as_view(), name='popular-tags-view'),]