# Generated by Django 2.2.17 on 2020-11-10 12:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Gfghjrty',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fgwrs', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='gfghjrty_fgwrs', to='home.HomePage')),
            ],
        ),
    ]
