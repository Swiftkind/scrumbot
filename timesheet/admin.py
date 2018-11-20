from django.contrib import admin
from .models import Timesheet


class TimeSheetAdmin(admin.ModelAdmin):
    readonly_fields = ('time_in',)
    
admin.site.register(Timesheet, TimeSheetAdmin)
