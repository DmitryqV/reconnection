import getpass
import os

__message__ = ""

while len(__message__) == 0:
  __message__ = input("Enter commit name: \n")

os.system(f"git add . && git commit -a -m'{getpass.getuser()}: {__message__}' && git push");
os.system(f"clear && exit")