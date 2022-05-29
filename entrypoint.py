from sys import argv
import os

install__node__modules   = "yarn install"
__name__                 = "entrypoint.py"
__option__               = argv[1]
__mode__                 = argv[2]  

os.system(f"{install__node__modules} && cd ./{__option__} && python {__name__} {__option__}:{__mode__}");
