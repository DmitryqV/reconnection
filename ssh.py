import os
import re
import platform

if platform.system() == "Windows":
  os.system("cls")
else:
  os.system("clear")



__VM__LIST__ = open('vm.list', 'r')
__LIST__     = []

count = 0

for line in __VM__LIST__.readlines():
  print("{} connect: {}".format(count, line.strip()))
  __LIST__.append(re.sub(r'\n', '', line))
  count += 1

os.system(f"ssh {str(input('Send user name: '))}@{__LIST__[int(input('Send number: '))]}")
