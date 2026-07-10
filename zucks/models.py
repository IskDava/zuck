from django.db import models
from .download_default import get_default_zuck

# Create your models here.
class Zuck(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    avatar = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    author = models.CharField(max_length=100)
    elements = models.JSONField(default=list, blank=True)

def add_zuck_model(zuck: dict):
    if Zuck.objects.filter(id=zuck["id"]).exists():
        return

    Zuck.objects.create(id=zuck["id"], 
                        avatar=zuck["avatar"], 
                        description=zuck["description"], 
                        author=zuck["author"],
                        elements=zuck["elements"],
                        name=zuck["name"]
                    )
    
def write_zuck_model(zuck):
    if Zuck.objects.filter(id=zuck["id"]).exists():
        Zuck.objects.get(id=zuck["id"]).delete()

    add_zuck_model(zuck)