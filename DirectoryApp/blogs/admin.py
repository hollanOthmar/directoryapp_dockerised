from django.contrib import admin
from .models import Blog

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'created_at','published')
    list_filter = ('show',)