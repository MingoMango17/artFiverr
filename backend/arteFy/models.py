from django.db import models
from django.contrib.auth.models import AbstractUser, User
# Create your models here.
class appUser(AbstractUser):
    CUSTOMER = 0
    ARTIST = 1
    ADMIN = 2

    USER_TYPE_CHOICES = (
        (CUSTOMER, 'Customer'),
        (ARTIST, 'Artist'),
        (ADMIN, 'Admin')
    )

    user_type = models.IntegerField(
        choices=USER_TYPE_CHOICES,
        default=CUSTOMER, null=True, blank=True)
    instagram = models.CharField(max_length=25, blank=True)
    facebook = models.CharField(max_length=25, blank=True)


class Contract(models.Model):
    artist = models.ForeignKey(appUser, related_name='artist_contract' ,on_delete=models.CASCADE)
    user = models.ForeignKey(appUser, related_name='user_contract', on_delete=models.CASCADE)
    rate = models.IntegerField(null=False, blank=False)


