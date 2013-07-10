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

## Start 
    bundle install
    bower install
    foreman start

## Push to heroku
    First time:
    heroku plugins:install git://github.com/ddollar/heroku-config.git
    heroku config:pull
    heroku git:remote -a velvethands
    
    Deploy new version:
    git push heroku master
