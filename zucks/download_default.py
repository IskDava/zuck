import os, json

def list_images(game_id):
    imgs = os.listdir(f"static/{game_id}")
    imgs.remove("avatar")
    imgs.remove("conf.json")
    return imgs

def image_to_element(filename):
    s = ""
    for c in filename:
        if c == '_':
            s += ' '
        elif c == '.':
            break
        else:
            s += c
    return s

def files_to_elements(files):
    return list(map(image_to_element, files))

def get_elements_by_id(zuck_id):
    imgs = list_images(zuck_id)
    return files_to_elements(imgs)

def get_default_zuck(zuck_id):
    elements = get_elements_by_id(zuck_id)

    with open(f"static/{zuck_id}/conf.json") as config:
        zuck = json.load(config)
        zuck["elements"] = elements

    avatar = os.listdir(f"static/{zuck_id}/avatar")[0]
    zuck["avatar"] = avatar

    zuck["id"] = zuck_id

    return zuck