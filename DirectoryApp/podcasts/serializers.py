from rest_framework import serializers
from podcasts.models import Podcast
from tags.models import Tag
# from tags.serializers import TagSerializer

class TagSerializer(serializers.ModelSerializer):
    # blogs = BlogSerializer(many=True,read_only=True)
    # podcasts = PodcastSerializer(many=True,read_only=True)

    class Meta:
        model = Tag
        fields = ('pk','tag_color','icon')


class PodcastSerializer(serializers.ModelSerializer):
    tags = TagSerializer(read_only=True, many=True)
    class Meta:
        model = Podcast
        fields = '__all__'
        depth=1

    def create(self, validated_data):
        # print(self.context['request'].data)
        tags = self.context['request'].data['tags']
        podcast = Podcast.objects.create(**validated_data)
        for tag_data in tags:
            tag = Tag.objects.get(pk=tag_data.get('pk'))
            podcast.tags.add(tag)
        return podcast