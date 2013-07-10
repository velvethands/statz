require 'sinatra'
require 'json'
require 'mongo'
include Mongo

mongo_uri = ENV['MONGOLAB_URI']
db_name = mongo_uri[%r{/([^/\?]+)(\?|$)}, 1]
client = MongoClient.from_uri(mongo_uri)
db = client.db(db_name)
db.collection_names.each { |name| puts name }

get '/rest/health-check' do
  status 200
end

get '/rest/teams' do
  content_type :json
    [{ :name => 'Lol' }, { :name => 'Bal' }].to_json
end
