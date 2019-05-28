from rest_framework.pagination import LimitOffsetPagination,PageNumberPagination

class BlogPageNumberPagination(PageNumberPagination):
    page_size=2