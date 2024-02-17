from django.contrib import admin

from .models import appUser, Contract

admin.site.register(appUser)
admin.site.register(Contract)