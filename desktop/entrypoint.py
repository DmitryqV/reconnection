from sys import argv
import os

launch__desktop = "electron ./main.js"

if argv[1] == "desktop:start":
  os.system(f"{launch__desktop}")

