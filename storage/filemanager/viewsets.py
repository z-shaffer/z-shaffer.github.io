from rest_framework import viewsets
from .models import Data
from .serializers import DataSerializer

# The Django REST Framework allows you to combine the logic for a set of related views in a single class, called a ViewSet. 
# A ViewSet class is simply a type of class-based View.

class DataViewSet(viewsets.ModelViewSet):
    queryset = Data.objects.all()
    serializer_class = DataSerializer