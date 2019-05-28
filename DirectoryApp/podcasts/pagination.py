from rest_framework.pagination import LimitOffsetPagination,PageNumberPagination

class PodcastPageNumberPagination(PageNumberPagination):
    page_size=2