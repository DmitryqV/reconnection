import getpass
import os

__message__ = ""

while len(__message__) == 0:
  __message__ = input("Enter commit name: \n")

os.system(f"git add . && git commit -a -m'{getpass.getuser()}: {__message__}' && git push")
os.system("clear")

__frontend__ = input("Start frontend ? y/n")

while (__frontend__ != "y" & __frontend__ != "n"):
  if __frontend__ == "y": 
    os.system("yarn frontend")
    os._exit(0)
  if __frontend__ == "n": os._exit(0)
