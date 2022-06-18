from sys import argv
import os

launch__backend          = "nest start --watch"
launch__build__backend   = "nest build"

if argv[1] == "backend:start":
  os.system(f"{launch__backend}")

if argv[1] == "backend:build":
  os.system(f"{launch__build__backend}")
