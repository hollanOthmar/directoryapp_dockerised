from rest_framework import routers
from .api import PodcastViewSet

router = routers.DefaultRouter()
router.register('',PodcastViewSet,'podcasts')

urlpatterns = router.urls