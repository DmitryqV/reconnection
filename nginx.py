import os

os.system(f"sudo /usr/bin/nginx -t -c  /home/dmitry/.localrc/reconnection/nginx.conf")
os.system(f"sudo systemctl restart nginx")
