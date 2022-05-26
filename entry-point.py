import os
from sys import argv

install__node__modules   = "yarn install"
__name__                 = "entry-point.py"

if argv[1]:
  os.system(f"{install__node__modules} && cd ./{argv[1]} && python {__name__} {argv[1]}:{argv[2]}");
