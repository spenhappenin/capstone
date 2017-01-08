class Event < ApplicationRecord

	validates_presence_of :name, :date, :time, :venue,
												:street, :city, :state, :zip,
												:skill_level, :sport
	belongs_to :user
	has_many :users, through: :user_events
	has_many :user_events, dependent: :destroy
	has_many :comments

	serialize :attending, Array

	after_create :set_attending

	acts_as_mappable
	include Geokit::Geocoders

	def lat 
		self.latitude 
	end 

	def lng 
		self.longitude
	end

	def self.getLatLong(address)
		data = MultiGeocoder.geocode(address)
		{lat: data.latitude, lng: data.longitude}
	end

	def set_attending
		self.attending << self.user_id.to_s
		self.save
	end

end
