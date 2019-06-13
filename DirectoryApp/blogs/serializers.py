from rest_framework import serializers
from blogs.models import Blog
from tags.models import Tag

# from tags.serializers import TagSerializer
# from drf_writable_nested import WritableNestedModelSerializer

class TagSerializer(serializers.ModelSerializer):
    # blogs = BlogSerializer(many=True,read_only=True)
    # podcasts = PodcastSerializer(many=True,read_only=True)

    class Meta:
        model = Tag
        fields = ('pk','tag_color','icon')

class BlogSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    class Meta:
        model = Blog
        depth=1
        fields = '__all__'
        # fields = ('id', 'tags', 'itemType','author','description','url','show','created_at','updated_at','author_contact','nestedtags')

    def create(self, validated_data):
        # print(self.context['request'].data)
        tags = self.context['request'].data['tags']
        blog = Blog.objects.create(**validated_data)
        for tag_data in tags:
            tag = Tag.objects.get(pk=tag_data.get('pk'))
            blog.tags.add(tag)
        return blog