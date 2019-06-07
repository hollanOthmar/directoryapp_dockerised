from rest_framework import serializers
from blogs.models import Blog
from tags.serializers import TagSerializer

class BlogSerializer(serializers.ModelSerializer):
    tags = TagSerializer(read_only=True, many=True)
    class Meta:
        model = Blog
        fields = '__all__'