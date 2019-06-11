from django.db import models
from tags.models import Tag
import uuid

# Podcast model
class Podcast(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    itemType = models.CharField(editable=False,default='PODCAST',max_length=10)
    description = models.TextField(blank=False, default='')
    url = models.TextField(default='https://www.google.com',blank=False)
    duration = models.DurationField(null=True)
    tags = models.ManyToManyField(Tag,blank=True)
    show = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["created_at"]

    def __str__(self):
        """
        String for representing the Model object (in Admin site etc.)
        """
        return '{0}'.format(self.title)
