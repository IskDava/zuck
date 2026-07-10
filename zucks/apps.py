from django.apps import AppConfig


class ZucksConfig(AppConfig):
    name = 'zucks'

    def ready(self):
        from .download_default import get_default_zuck
        from .models import add_zuck_model, write_zuck_model
        add_zuck_model(get_default_zuck(1))
        add_zuck_model(get_default_zuck(2))