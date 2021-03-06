# Generated by Django 3.0.5 on 2020-04-17 06:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='user',
            options={'ordering': ['-c_time'], 'verbose_name': '用户信息表', 'verbose_name_plural': '用户信息表'},
        ),
        migrations.RemoveField(
            model_name='user',
            name='email',
        ),
        migrations.RemoveField(
            model_name='user',
            name='sex',
        ),
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(max_length=128, unique=True),
        ),
        migrations.CreateModel(
            name='userToken',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('token', models.CharField(max_length=60)),
                ('username', models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, to='login.User')),
            ],
            options={
                'verbose_name': '用户token表',
                'verbose_name_plural': '用户token表',
                'db_table': 'user_token',
            },
        ),
    ]
