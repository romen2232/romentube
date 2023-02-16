from rest_framework import generics
from backend.app.video.models import Subtitle, Video
from ..serializers.general_serializers import SubtitleSerializer, VideoSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET', 'POST'])
def subtitle_list(request):
    if request.method == 'GET':
        subtitles = Subtitle.objects.all()
        serializer = SubtitleSerializer(subtitles, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SubtitleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def subtitle_detail(request, pk):
    try:
        subtitle = Subtitle.objects.get(pk=pk)
    except Subtitle.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SubtitleSerializer(subtitle)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = SubtitleSerializer(subtitle, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        subtitle.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
