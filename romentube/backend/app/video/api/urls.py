from django.urls import path
from .views.video_views import video_list, video_detail, video_subtitles
from .views.subtitle_views import subtitle_list, subtitle_detail
from .views.playlist_views import playlist_list, playlist_detail


urlpatterns = [
    path('videos/', video_list, name='video_list'),
    path('videos/<int:pk>/', video_detail, name='video_detail'),
    path('videos/<int:pk>/subtitles/',
         video_subtitles, name='video_subtitles'),
    path('subtitles/', subtitle_list, name='subtitle_list'),
    path('subtitles/<int:pk>/', subtitle_detail, name='subtitle_detail'),
    path('playlists/', playlist_list, name='playlist_list'),
    path('playlists/<int:pk>/', playlist_detail, name='playlist_detail'),
]
