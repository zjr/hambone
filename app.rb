require 'rubygems'
require 'sinatra'
require 'mongo'
require 'json/ext'

include Mongo

configure do 
	conn = MongoClient.new("localhost", 27017)
	set :mongo_connection, conn
	set :mongo_db, conn.db('test')
end

get '/' do
	haml :index, :attr_wrapper => '"', :locals => {:title => "My mutha fukkin title, bitch."}
end

get '/:wassup' do
	"Oh muh #{params[:wassup]}"
end
