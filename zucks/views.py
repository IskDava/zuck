from django.shortcuts import render
from django.http import JsonResponse
from .download_default import get_default_zuck
from .models import *
import os

# Create your views here.


def show_game(request, game_id):
    zuck = Zuck.objects.get(id=game_id)
    arr = zuck.elements

    every = os.listdir(f"./static/{game_id}")

    for i in range(len(arr)):
        filename = ''
        for c in arr[i]:
            if c == ' ':
                filename += '_'
            else:
                filename += c

        for possible in every: 
            if possible.startswith(filename):
                    filename = possible
    
        arr[i] = {"name": arr[i], "img":filename}

    return render(request, "choice.html", {"elements": zuck.elements, "id":zuck.id})