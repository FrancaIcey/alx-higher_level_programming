#!/usr/bin/python3
"""Defines a text file-reading function."""


def read_file(filename=""):
    """Print the content of a UTB text file to standard out."""
    with open(filename, encoding="utf-8") as f:
        print(f.read(), end="")
