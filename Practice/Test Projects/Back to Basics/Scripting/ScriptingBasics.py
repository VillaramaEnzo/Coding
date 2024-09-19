# Following along Tech with Tim Video
# URL:  https://www.youtube.com/watch?v=dQlw1Cdd3pw
# Title: Learn python scripting with one project

import os
import json
import shutil
from subprocess import PIPE, run
import sys
def mainloop(source, target): 
    print(source, target)

if __name__ == "__main__":
    
    args = sys.argv
    if len(args) != 3:
        raise Exception("You must pass a sourch and target directory - only!")
    source, target = args[1:]
    mainloop(source, target)