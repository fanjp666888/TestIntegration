"""TestIntegration URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from login import views
from cases import urls
# from rest_framework_swagger.views import get_swagger_view
from rest_framework.documentation import include_docs_urls
# schema_view = get_swagger_view(title="API 接口文档")
from django.views.static import serve
from django.conf import settings

#  进入 static/docs执行：apidoc -i ../../login/ -o apicoc/ 生成api文档
urlpatterns = [
    path('admin/', admin.site.urls),
    path('index', views.Goods.as_view()),
    path('login', views.LoginView.as_view()),       # 登陆
    path('register', views.Register.as_view()),      # 注册
    path('logout', views.logout),                    #退出
    path("api/case/", include(urls)),                 # case项目
    re_path(r'^apidoc/(?P<path>.*)$', serve, {"document_root":settings.APIDOC_ROOT})  # api文档路径
]
