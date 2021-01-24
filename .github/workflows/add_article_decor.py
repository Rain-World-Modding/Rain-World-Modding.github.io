import os
import re

"""
Helper script for the Rain World modding wiki update project that 
uses regex to add missing tags from the article-decor.txt file to 
html files inside the pages directory and its subdirectories.
"""


ZERO_DEPTH_OFFSET = -2

with open("article-decor.txt") as file:
    DECORATIONS = [line for line in file.read().split("\n") if line != ""]

def get_file_depth(path: str) -> int:
    """
    Returns the depth of a file based on the number of path sep characters found.
    An offset is applied so that the depth of an article in a top-level category and 
    in no sub-categories is 0.
    """
    sep_count = len(re.findall(r"[/\\]", path))
    return sep_count + ZERO_DEPTH_OFFSET


def get_resource_path_prepend(path: str) -> str:
    """
    Returns the relative resource path prepend depending on the file's depth in the system.
    """
    depth = get_file_depth(path)
    return "../" * depth


def add_stuff(path: str, html: str) -> str:
    """
    Adds missing tags for head and external resources to the HTML string and returns the result.
    """

    # format tags
    resource_path_prepend = get_resource_path_prepend(path)
    formatted_tag_list = []
    for tag in DECORATIONS:
        tag = re.sub(r'"', r"'", tag)
        tag = re.sub(r"(href=')", r"\1"+resource_path_prepend, tag)     # css href
        tag = re.sub(r"(src=')", r"\1"+resource_path_prepend, tag)      # js src
        formatted_tag_list.append(tag)
    formatted_tags = "\n".join(formatted_tag_list)

    # add wrap body content with body tags, prepend head, etc
    title = re.split(r"[\\/]", path)[-1].replace(".html", "").replace("-", " ") + " (Rain World Modding)"
    contents = f"<!doctype html>\n<html lang='en'>\n<head>\n{formatted_tags}\n" + \
                    "<meta charset='UTF-8'><meta name='viewport' content='width=device-width initial-scale=1'>\n" + \
                    f"<title>{title}</title>\n</head>\n<body>\n" + \
                    html + \
                    "\n</body>\n</html>\n"


    """
    # replace all double quotes inside the html head tags with single quotes
    contents = re.sub(r'(<head>.*)"([^"]*)"(.*</head>)', r"\1'\2'\3", contents, flags=re.DOTALL)
    resource_path_prepend = get_resource_path_prepend(path)
    
    for tag in DECORATIONS:
        # format tag string
        tag = re.sub(r'"', r"'", tag)
        tag = re.sub(r"(href=')", r"\1"+resource_path_prepend, tag)     # css href
        tag = re.sub(r"(src=')", r"\1"+resource_path_prepend, tag)      # js src

        if tag not in contents:
            # insert new tag after <head> open tag
            contents = re.sub(r"(<head>)", r"\1"+"\n"+tag, contents)
    """

    return contents
