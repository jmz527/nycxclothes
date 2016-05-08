# require "instagram"
require 'HTTParty'

# nycxfeed = 'https://www.instagram.com/nycxclothes/media/'

class ImageController < ApplicationController
	def index
		@instafeed = HTTParty.get('https://www.instagram.com/nycxclothes/media/')
	end
end
