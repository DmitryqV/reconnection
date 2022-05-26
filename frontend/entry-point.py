import os
from sys import argv

# install__sub__modules = "git submodule update --init --recursive --remote"
# launch__linter = "yarn lint"

launch__project = "webpack serve  --hot --open --mode=development"
install__node__modules = "yarn install"
launch__build = "webpack --config webpack.config.js --mode=production"


if argv[1] == "build":
  os.system(f"""
    {install__node__modules} &&
    {launch__build}
  """);

if argv[1] == "start":
  os.system(f"""
    {install__node__modules} &&
    {launch__project}
  """);
