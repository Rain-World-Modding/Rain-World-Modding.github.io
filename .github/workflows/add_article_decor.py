import os
import re

"""
Helper script for the Rain World modding wiki update project that 
uses regex to add missing tags from the article-decor.txt file to 
html files inside the pages directory and its subdirectories.
"""


ZERO_DEPTH_OFFSET = -3

with open("./.github/workflows/article-decor.txt") as file:
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


def add_stuff(fp: str):
    """
    Adds missing tags for external resources to a given file.
    """
    with open(fp, encoding="utf8") as f:
        print("\n" + f.name)
        orig_contents = f.read()
    # replace all double quotes inside the html head tags with single quotes
    contents = re.sub(r'(<head>.*)"([^"]*)"(.*</head>)', r"\1'\2'\3", orig_contents, flags=re.DOTALL)
    resource_path_prepend = get_resource_path_prepend(fp)
    
    for tag in DECORATIONS:
        # format tag string
        tag = re.sub(r'"', r"'", tag)
        tag = re.sub(r"(href=')", r"\1"+resource_path_prepend, tag)     # css href
        tag = re.sub(r"(src=')", r"\1"+resource_path_prepend, tag)      # js src

        print(tag)
        print(tag in contents)

        if tag not in contents:
            # insert new tag after <head> open tag
            contents = re.sub(r"(<head>)", r"\1"+"\n"+tag, contents)
            print(f"new tag : {tag}")

    if orig_contents != contents:
        # save new contents if changed
        with open(fp, "w", encoding="utf8") as f:
            f.write(contents)


def iterate_dir(dirname: str):
    """
    Iterates through a directory for article html files. Calls modifying functions.
    """
    for root, _dirs, files in os.walk(dirname):
        for f in files:
            if f.endswith(".html"):
                add_stuff(os.path.join(root, f))
            
            

if __name__ == "__main__":
    pages_path = "./pages"
    iterate_dir(pages_path)
