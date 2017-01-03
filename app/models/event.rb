class Event < ApplicationRecord

	validates_presence_of :name, :date, :time, :venue,
												:street, :city, :state, :zip,
												:skill_level, :sport
	belongs_to :user
	has_many :users, through: :user_events
	has_many :user_events, dependent: :destroy
	has_many :comments

	acts_as_mappable
	include Geokit::Geocoders

	def self.getLatLong(address)
		data = MultiGeocoder.geocode(address)
		{lat: data.latitude, lng: data.longitude}
	end

end
