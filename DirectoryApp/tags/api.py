from .models import Tag
from podcasts.models import Podcast
from blogs.models import Blog
from rest_framework import viewsets, permissions, generics
from .serializers import TagSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core import serializers
from django.db.models import Count, F

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TagSerializer
    filter_backends = (DjangoFilterBackend,)
    # filterset_fields = ('tag_name')


class PopularTagsView(generics.GenericAPIView):
    # serializer_class = TagSerializer
    def get(self, request, format=None):
        """
        Return a list of popular tags
        """
        # tags = [tag.pk for tag in Tag.objects.all()]
        tags = Tag.objects.all().annotate(total_blogs=Count('blog',distinct=True), total_podcasts=Count('podcast',distinct=True)).annotate(total_count=F('total_blogs') + F('total_podcasts')).order_by('-total_count')[:5]
        # data = serializers.serialize('json', list(tags), fields=('pk','tag_color'))
        counts = [f.total_count for f in tags][:4]
        summary = []
        for i in range(len(counts)):
            summary.append({"count":counts[i],"tag_name":tags[i].__dict__['tag_name'],"tag_color":tags[i].__dict__['tag_color']})
        return Response(summary)