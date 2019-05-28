from .models import Tag
from rest_framework import serializers
from blogs.serializers import BlogSerializer
from podcasts.serializers import PodcastSerializer

class TagSerializer(serializers.ModelSerializer):
    # blogs = BlogSerializer(many=True,read_only=True)
    # podcasts = PodcastSerializer(many=True,read_only=True)

    class Meta:
        model = Tag
        fields = ('pk','tag_color')
