from django.urls import path
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    # path('', include('base.urls')),
    path('login_user', views.login_user, name="login"),

]