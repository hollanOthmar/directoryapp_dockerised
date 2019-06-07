from rest_framework import serializers
from podcasts.models import Podcast
from tags.serializers import TagSerializer

class PodcastSerializer(serializers.ModelSerializer):
    tags = TagSerializer(read_only=True, many=True)
    class Meta:
        model = Podcast
        fields = '__all__'