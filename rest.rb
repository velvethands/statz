require 'sinatra'
require 'json'

get '/rest/health-check' do
  status 200
end

get '/rest/teams' do
  content_type :json
    [{ :name => 'Lol' }, { :name => 'Bal' }].to_json
end
