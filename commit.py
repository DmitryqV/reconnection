import getpass
import os

os.system(f"git add . && git commit -a -m'{getpass.getuser()} updated project' && git push");
