from django.db import models
from simple_history.models import HistoricalRecords
from backend.app.base.models import BaseModel


class Video(BaseModel):
    title = models.CharField(max_length=255)
    description = models.TextField()
    video = models.FileField(upload_to='videos')
    history = HistoricalRecords()

    @property
    def _history_user(self):
        return self.changed_by

    @_history_user.setter
    def _history_user(self, value):
        self.changed_by = value

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Video'
        verbose_name_plural = 'Videos'


class Subtitle(BaseModel):
    language = models.CharField(max_length=255)
    srt_file = models.FileField(upload_to='subtitles/')
    video = models.ForeignKey(
        Video, on_delete=models.CASCADE, related_name='subtitles')
    history = HistoricalRecords()

    @property
    def _history_user(self):
        return self.changed_by

    @_history_user.setter
    def _history_user(self, value):
        self.changed_by = value

    def __str__(self):
        return self.video.title+' - '+self.language


class Playlist(BaseModel):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    video = models.ManyToManyField(Video, blank=True)
    history = HistoricalRecords()

    @property
    def _history_user(self):
        return self.changed_by

    @_history_user.setter
    def _history_user(self, value):
        self.changed_by = value

    def __str__(self):
        return self.name
