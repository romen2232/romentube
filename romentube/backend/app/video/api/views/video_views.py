from rest_framework import generics
from backend.app.video.models import Video
from ..serializers.general_serializers import VideoSerializer, SubtitleSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET', 'POST'])
def video_list(request):

    # GET list of videos
    if request.method == 'GET':
        videos = Video.objects.all()
        serializer = VideoSerializer(videos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # POST a new user
    elif request.method == 'POST':
        serializer = VideoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def video_detail(request, pk):

    # queryset
    video = Video.objects.filter(id=pk).first()

    # validations
    if not video:
        return Response('message: video not found', status=status.HTTP_404_NOT_FOUND)

    # retrieve
    elif request.method == 'GET':
        serializer = VideoSerializer(video, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # update
    elif request.method == 'PUT':
        serializer = VideoSerializer(instance=video, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # delete
    elif request.method == 'DELETE':
        video.delete()
        return Response('message: video deleted', status=status.HTTP_204_NO_CONTENT)

# Get all subtitles for a video


@api_view(['GET'])
def video_subtitles(request, pk):
    try:
        video = Video.objects.get(pk=pk)
    except Video.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        subtitles = video.subtitles.all()
        serializer = SubtitleSerializer(subtitles, many=True)
        return Response(serializer.data)
