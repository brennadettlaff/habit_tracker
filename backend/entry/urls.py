from django.urls import path
from . import views

urlpatterns = [
    path('view/<int:habit_id>', views.entry_list),
]