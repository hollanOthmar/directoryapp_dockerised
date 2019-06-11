from django.db import models
from colorfield.fields import ColorField
# from blogs.models import Blog
# from podcasts.models import Podcast

# Create your models here.
class Tag(models.Model):
    tag_name = models.CharField(primary_key=True,max_length=255)
    # blogs = models.ManyToManyField(Blog,blank=True)
    # podcasts = models.ManyToManyField(Podcast,blank=True)
    # tag_color = models.CharField(max_length=7,default="#adb5bd")
    tag_color = ColorField(default='#adb5bd')
    # icon = models.ImageField(upload_to='images/',null=True)
    icon = models.URLField(max_length=255,default="https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-hashtag-512.png")

    def __str__(self):
        """
        String for representing the Model object (in Admin site etc.)
        """
        return '{0}'.format(self.tag_name)
