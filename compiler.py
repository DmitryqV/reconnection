import os
import subprocess

os.system("clear")

__GO_LANG__  = os.system("go env GOROOT")
__GO_FILES__ = []

if int(__GO_LANG__) == 0:
  __GO_LANG__ = "/usr/lib/go"

for root, dirs, files in os.walk("./wasm/"):
  for file in files:
    if file.endswith(".go"):
      __GO_FILES__.append(os.path.join(root, file))

for file in __GO_FILES__:
  __local__   = file.split('/')
  subprocess.Popen(f"cd ./wasm && GOOS=js GOARCH=wasm go build -o ./modules/{__local__[len(__local__) - 1]}.wasm", stdout=subprocess.PIPE, shell=True)

