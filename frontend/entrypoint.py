from sys import argv
import os

launch__linter           = "yarn eslint"
launch__build__frontend  = "webpack --mode=production"
launch__prettier         = "yarn prettier --write ."
launch__frontend         = "webpack serve"

if argv[1] == "frontend:start":
  os.system(f"{launch__prettier} && {launch__linter} && {launch__frontend}");

if argv[1] == "frontend:build":
  os.system(f"{launch__build__frontend}");
