# Generated by Django 4.1.3 on 2022-11-03 07:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Members',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Addresses',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('street_name', models.CharField(max_length=500)),
                ('level', models.SmallIntegerField()),
                ('unit', models.SmallIntegerField()),
                ('member', models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='main_app.members')),
            ],
        ),
    ]
