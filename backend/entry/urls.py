from django.urls import path
from . import views

urlpatterns = [
    path('get/', views.all_entries),
    path('view/<int:habit_id>/', views.entry_list),
]