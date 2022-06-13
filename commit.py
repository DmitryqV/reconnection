import os
import platform

if platform.system() == "Windows":
  os.system("cls")
else:
  os.system("clear")

__message__ = ""

while len(__message__) == 0:
  __message__ = input("Enter commit name: \n")

os.system(f"git add . && git commit -m'{__message__}' && git push")

if platform.system() == "Windows":
  os.system("cls")
else:
  os.system("clear")


