from rest_framework import serializers
from .models import Data

# Serializers allow complex data such as querysets and model instances to be converted to native 
# Python datatypes that can then be easily rendered into JSON, XML or other content types.

# The ModelSerializer class provides a shortcut that lets you automatically create a Serializer class with 
# fields that correspond to the Model fields.

class DataSerializer(serializers.ModelSerializer):

    size = serializers.SerializerMethodField()
    name = serializers.SerializerMethodField()
    filetype = serializers.SerializerMethodField()
    since_added = serializers.SerializerMethodField()

    # Data table frame
    
    class Meta:
        model = Data
        fields = ('file_id', 'file', 'since_added', 'size', 'name', 'filetype')
        
    # Return size of file    
        
    def get_size(self, obj):
        file_size = ''
        if obj.file and hasattr(obj.file, 'size'):
            file_size = obj.file.size
        return file_size

    # Return name of file
      
    def get_name(self, obj):
        file_name = ''
        if obj.file and hasattr(obj.file, 'name'):
            file_name = obj.file.name
        return file_name

    # Return file extension  
      
    def get_filetype(self, obj):
      filename = obj.file.name
      return filename.split('.')[-1]
    
    # Return upload date
      
    def get_since_added(self, obj):
        date_added = obj.date_created
        return date_added        
