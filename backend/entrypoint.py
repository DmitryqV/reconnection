from sys import argv
import os

launch__build__backend   = "nest build"
launch__backend          = "nest start --watch"

if argv[1] == "backend:start":
  os.system(f"{launch__backend}");

if argv[1] == "backend:build":
  os.system(f"{launch__build__backend}");
