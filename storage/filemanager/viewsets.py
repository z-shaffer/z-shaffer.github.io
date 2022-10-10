from rest_framework import viewsets
from .models import Data
from .serializers import DataSerializer

from django.shortcuts import get_object_or_404
from django.http import Http404

from rest_framework.response import Response 
from rest_framework import permissions, status
from rest_framework.parsers import MultiPartParser, FormParser

# The Django REST Framework allows you to combine the logic for a set of 
# related views in a single class, called a ViewSet. A ViewSet class is 
# simply a type of class-based View.

class DataViewSet(viewsets.ModelViewSet):
    queryset = Data.objects.all()
    serializer_class = DataSerializer