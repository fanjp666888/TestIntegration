# Generated by Django 3.0.5 on 2020-04-17 09:17

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0002_auto_20200417_1433'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='usertoken',
            options={},
        ),
        migrations.AddField(
            model_name='usertoken',
            name='add_time',
            field=models.DateTimeField(default=datetime.datetime.now, verbose_name='添加时间'),
        ),
        migrations.AddField(
            model_name='usertoken',
            name='expiration_time',
            field=models.DateTimeField(default=datetime.datetime.now, verbose_name='过期时间'),
        ),
        migrations.AlterField(
            model_name='usertoken',
            name='token',
            field=models.CharField(max_length=64, verbose_name='用户token'),
        ),
        migrations.AlterModelTable(
            name='usertoken',
            table=None,
        ),
    ]
