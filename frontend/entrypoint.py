import os
from sys import argv

launch__build__frontend  = "webpack --mode=production"
launch__frontend         = "webpack serve"
launch__prettier         = "yarn prettier --write ."
launch__linter         = "yarn eslint '**/*.{ts,tsx}'"

if argv[1] == "frontend:start":
  os.system(f"{launch__prettier} && {launch__linter} && {launch__frontend}");

if argv[1] == "frontend:build":
  os.system(f"{launch__build__frontend}");
