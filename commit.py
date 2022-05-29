import os

os.system("clear")

__message__ = ""

while len(__message__) == 0:
  __message__ = input("Enter commit name: \n")

os.system(f"git add . && git commit -a -m'{__message__}' && git push")

os.system("clear")
