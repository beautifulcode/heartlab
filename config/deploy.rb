set :application, "heartlab"
set :repository,  "https://beautifulcode@github.com/beautifulcode/heartlab.git"

set :scm, :git

set :user, 'agdeploy'
set :use_sudo, false

role :web, "http://heartlab.aaronglenn.ca"                          # Your HTTP server, Apache/etc
