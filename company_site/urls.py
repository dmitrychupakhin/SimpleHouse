from django.urls import path
from . import views

urlpatterns = [
    path('', views.index,name="index"),
    path('projects', views.project_list,name="project_list"),
    path('services', views.services,name="services"),
    path('projects/<int:id>', views.project_description,name="project_description"),
    path('about_us', views.about_us,name="about_us")

]
