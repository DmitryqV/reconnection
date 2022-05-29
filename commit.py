import getpass
import os

__message__ = input("Enter commit name: \n")

os.system(f"git add . && git commit -a -m'{getpass.getuser()}: {__message__}' && git push");
