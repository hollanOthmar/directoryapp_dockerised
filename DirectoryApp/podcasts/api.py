from podcasts.models import Podcast
from rest_framework import viewsets, permissions
from .serializers import PodcastSerializer
from rest_framework import filters

class PodcastViewSet(viewsets.ModelViewSet):
    # queryset = Podcast.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PodcastSerializer

    filter_backends = (filters.SearchFilter,)
    search_fields = ('title', 'description')

    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        queryset = Podcast.objects.all()
        tag = self.request.query_params.get('tag', None)
        if tag is not None:
            queryset = queryset.filter(tags__in=[tag])
        return queryset