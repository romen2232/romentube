from backend.app.video.models import Video, Playlist, Subtitle
from rest_framework import serializers


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        exclude = ('state', 'updated_at', 'deleted_at')


class PlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playlist
        exclude = ('state', 'created_at', 'updated_at', 'deleted_at')


class SubtitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtitle
        exclude = ('state', 'created_at', 'updated_at', 'deleted_at')
