from django.db import models
from datetime import datetime
# Create your models here.



class User(models.Model):
    username = models.CharField(max_length=128, unique=True, verbose_name="用户名")
    password = models.CharField(max_length=256, verbose_name="密码")
    c_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")

    def __str__(self):
        return self.username

    class Meta:
        # managed = True
        ordering = ["-c_time"]
        verbose_name = "用户信息表"
        verbose_name_plural = "用户信息"
        db_table = "user_info"


class UserToken(models.Model):
    username = models.OneToOneField(to='User',on_delete=models.DO_NOTHING, unique=True)
    token = models.CharField(max_length=64, verbose_name="用户token")
    expiration_time = models.DateTimeField(default=datetime.now, verbose_name="过期时间")
    add_time = models.DateTimeField(default=datetime.now, verbose_name="添加时间")

    class Mate:
        # managed = True
        db_table = "user_token"
        verbose_name = "用户Token"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.token
