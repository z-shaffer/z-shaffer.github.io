from rest_framework import routers
from filemanager.viewsets import DataViewSet

# Creates a router object + '/files/ url extension. Provides viewSet + API endpoint.

router = routers.DefaultRouter()
router.register(r'files', DataViewSet, base_name='data')