task :bower do
  sh "bower install"
end

task :run => :bower do
  require './rest'
  Sinatra::Application.run!
end