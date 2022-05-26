import os
from sys import argv

# install__sub__modules = "git submodule update --init --recursive --remote"

launch__linter = "eslint '**/*.{ts,tsx}'"
launch__project = "webpack serve  --hot --open --mode=development"
install__node__modules = "yarn install"
launch__build = "webpack --config webpack.config.js --mode=production"


if argv[1] == "build":
  os.system(f"""
    {install__node__modules} &&
    {launch__linter} &&
    {launch__build}
  """);

if argv[1] == "start":
  os.system(f"""
    {install__node__modules} &&
    {launch__linter} &&
    {launch__project}
  """);

if argv[1] == "lint":
  os.system(f"{launch__linter}")
