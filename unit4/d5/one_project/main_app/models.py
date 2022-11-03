from django.db import models


class Members(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Addresses(models.Model):
    id = models.AutoField(primary_key=True)
    street_name = models.CharField(max_length=500)
    level = models.SmallIntegerField()
    unit = models.SmallIntegerField()
    member = models.ForeignKey(Members, on_delete=models.DO_NOTHING, null=True)

    def __str__(self):
        return self.street_name
