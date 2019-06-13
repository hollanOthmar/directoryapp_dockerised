from django.contrib import admin
from .models import Tag

# admin.site.register(Tag)
@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'colored_name')
