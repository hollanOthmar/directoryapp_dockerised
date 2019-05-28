from rest_framework import routers
from .api import TagViewSet

router = routers.DefaultRouter()
router.register('',TagViewSet,'tags')

urlpatterns = router.urls