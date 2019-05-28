from blogs.models import Blog
from rest_framework import viewsets, permissions
from .serializers import BlogSerializer
from rest_framework import filters
from .pagination import BlogPageNumberPagination
from urllib.parse import unquote

class BlogViewSet(viewsets.ModelViewSet):
    # queryset = Blog.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BlogSerializer
    pagination_class = BlogPageNumberPagination

    filter_backends = (filters.SearchFilter,)
    search_fields = ('title', 'author')
    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        queryset = Blog.objects.all()
        tag = self.request.query_params.get('tag', None)
        tn = unquote(tag)
        print(tn)
        if tag is not None:
            queryset = queryset.filter(tags__in=[tag])
        return queryset