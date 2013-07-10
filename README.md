statz
=====

## Tools
    Bower
        brew install npm
        npm install -g bower
    Ruby v 2.0
        brew install ruby
    Bundler
        gem install bundler
    Heroku
        brew install heroku-toolbelt
        heroku plugins:install git://github.com/ddollar/heroku-config.git
        heroku config:pull

## Start 
    bundle install
    bower install
    foreman start

## Push to heroku
    heroku git:remote -a velvethands
    git push heroku master
