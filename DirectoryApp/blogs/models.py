from django.db import models
from tags.models import Tag
from datetime import datetime
import uuid

class Blog(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    itemType = models.CharField(editable=False,default='BLOG',max_length=10)
    author = models.CharField(max_length=100,blank=True)
    description = models.TextField(default='',blank=False)
    url = models.TextField(default='https://www.google.com',blank=False)
    tags = models.ManyToManyField(Tag,blank=True)
    show = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True)

    class Meta:
        ordering = ["updated_at"]

    def __str__(self):
        """
        String for representing the Model object (in Admin site etc.)
        """
        return '{0}'.format(self.title)
