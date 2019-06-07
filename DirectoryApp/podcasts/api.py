from podcasts.models import Podcast
from rest_framework import viewsets, permissions
from .serializers import PodcastSerializer
from rest_framework import filters
from .pagination import PodcastPageNumberPagination
from urllib.parse import unquote

class PodcastViewSet(viewsets.ModelViewSet):
    # queryset = Podcast.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PodcastSerializer
    pagination_class = PodcastPageNumberPagination

    filter_backends = (filters.SearchFilter,)
    search_fields = ('title', 'description','tags__tag_name')

    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        queryset = Podcast.objects.all()
        queryset = queryset.filter(show=True)
        tag = self.request.query_params.get('tag', None)
        search = self.request.query_params.get('search', None)
        if tag is not None:
            tn = unquote(tag)
            queryset = queryset.filter(tags__in=[tn])
            
        if search is not None:
            sn = unquote(search)
            queryset = queryset.filter(tags__in=[sn])
        return queryset