from django.db import models

# Create your models here.


class BaseModel(models.Model):
    id = models.AutoField(primary_key=True)
    state = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        abstract = True
