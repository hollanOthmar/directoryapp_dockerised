from .models import Tag
from rest_framework import viewsets, permissions
from .serializers import TagSerializer
from django_filters.rest_framework import DjangoFilterBackend

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TagSerializer
    filter_backends = (DjangoFilterBackend,)
    # filterset_fields = ('tag_name')