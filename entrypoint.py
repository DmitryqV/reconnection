from sys import argv
import os

__name__                 = "entrypoint.py"
install__node__modules   = "yarn install"
__option__               = argv[1]
__mode__                 = argv[2]  

os.system(f"{install__node__modules} && cd ./{__option__} && python3 {__name__} {__option__}:{__mode__}");
