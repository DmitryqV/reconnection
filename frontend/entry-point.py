import os
from sys import argv

# fro git submodules
# install__sub__modules = "git submodule update --init --recursive --remote"

launch__build          = "webpack --mode=production"
launch__project        = "webpack serve"
launch__prettier       = "yarn prettier --write ."
launch__linter         = "yarn eslint '**/*.{ts,tsx}'"
install__node__modules = "yarn install"


if argv[1] == "build":
  os.system(f"""
    {install__node__modules} &&
    {launch__linter} &&
    {launch__build}
  """);

if argv[1] == "start":
  os.system(f"""
    {install__node__modules} &&
    {launch__prettier}&&
    {launch__linter} &&
    {launch__project}
  """);

if argv[1] == "lint":
  os.system(f"""
    {launch__prettier} &&
    {launch__linter}
  """)
