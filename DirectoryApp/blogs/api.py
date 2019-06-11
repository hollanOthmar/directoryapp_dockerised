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
    search_fields = ('title', 'author','tags__tag_name','description')
    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        queryset = Blog.objects.all()
        queryset = queryset.filter(show=True)
        tag = self.request.query_params.get('tag', None)
        search = self.request.query_params.get('search', None)
        if tag is not None:
            tn = unquote(tag)
            queryset = queryset.filter(tags__in=[tn])
        
        return queryset