# config/gunicorn.py

# Documentation at: http://docs.gunicorn.org/en/latest/index.html
django_project_name = "one_project"

# Chdir to specified directory before apps loading
chdir = "one_project"

# The socket to bind to
bind = "0.0.0.0:8000"

# The class of worker processes for handling requests
worker_class = "sync"

# Is a number of OS processes for handling requests
workers = 2

# Is a maximum count of active greenlets grouped in a pool that will be
# allowed in each process
worker_connections = 1000

# The maximum number of requests a worker will process before restarting
max_requests = 5000

# Workers silent for more than this many seconds are killed and restarted
timeout = 120

# Set environment variable
raw_env = \
    ["DJANGO_SETTINGS_MODULE={}.settings".format(django_project_name)]

# The access log file to write to, "-" means to stderr
accesslog = "-"

# The error log file to write to, "-" means to stderr
errorlog = "-"
