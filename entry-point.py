import os
from sys import argv

install__node__modules   = "yarn install"
__name__                 = "entry-point.py"
__option__               = argv[1]
__mode__                 = argv[2]  

os.system(f"{install__node__modules} && cd ./{__option__} && python {__mode__} {__option__}:{__mode__}");
