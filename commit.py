import os

os.system("clear")

__message__ = ""

while len(__message__) == 0:
  __message__ = input("Enter commit name: \n")

os.system(f"git add . && git commit -a -m'{__message__}' && git push")
os.system("clear")


__project__ = input("Start project ? fe/be : ")

if __project__ == "fe": os.system("yarn frontend")

if __project__ == "be": os.system("yarn backend")

os._exit(0)
