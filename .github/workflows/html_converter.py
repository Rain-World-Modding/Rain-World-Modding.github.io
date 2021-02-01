from bs4 import UnicodeDammit
import hashlib
import mistune
import os
from typing import Tuple
import chardet

import add_article_decor

"""
Generates HTML pages from markdown files in the pages dir and its subdirs
"""

os.chdir("../..")

def html_from_md_file(fp: str) -> str:
    """
    Uses mistune lib to convert md to html
    """
    with open(fp, "rb") as file:
        html = mistune.html(UnicodeDammit(file.read()).unicode_markup)
    return html


def page_changed(fp: str, new_content: str) -> Tuple[bool, str, str]:
    """
    Compares hash of html file content to new file content.
    Returns:
        bool: whether change
        str: new content (formatted)
        str: encoding code
    """
    # read binary of existing html and use it to get probable encoding
    try:
        with open(fp, "rb") as file:
            file_bytes = file.read()
        orig_encoding = chardet.detect(file_bytes)["encoding"]

        # read existing html using the above encoding and generate a hash
        with open(fp, encoding=orig_encoding) as file:
            file_content = UnicodeDammit(file.read()).unicode_markup
        old_hash = hashlib.sha256(file_content.encode(orig_encoding)).hexdigest()

        # generate hash from new html
        formatted_new_content = UnicodeDammit(new_content).unicode_markup
        new_hash = hashlib.sha256(formatted_new_content.encode(orig_encoding)).hexdigest()

        print(old_hash, new_hash)
        return old_hash != new_hash, formatted_new_content, orig_encoding

    except FileNotFoundError:
        return True, UnicodeDammit(new_content).unicode_markup, "utf8"


def iterate_dir(dirname: str):
    """
    Iterates through a directory for md files and then calls relevant methods.
    """
    for root, _dirs, files in os.walk(dirname):
        for file_name in files:
            if file_name.endswith(".md"):
                html_file_name = file_name[:-2] + "html"
                html_fp = os.path.join(root, html_file_name)

                # get the html equivalent content from the file path to a markdown page
                html_out = html_from_md_file(os.path.join(root, file_name))
                html_out = add_article_decor.add_stuff(html_fp, html_out)               

                _page_changed, html_out, encoding = page_changed(html_fp, html_out)
                if html_file_name not in files or _page_changed:
                    print(f"writing to {html_fp}")
                    with open(html_fp, "w+", encoding=encoding) as file:
                        file.write(html_out)


if __name__ == "__main__":
    print("running html converter")
    iterate_dir("pages")
