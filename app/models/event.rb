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
	after_commit :setLatLong

	acts_as_mappable
	include Geokit::Geocoders

	def lat
		self.latitude
	end

	def lng
		self.longitude
	end

	def getLatLong
		address = "#{self.street}, #{self.city}, #{self.state} #{self.zip}"
		begin
			data = MultiGeocoder.geocode(address)
			{lat: data.latitude, lng: data.longitude}
		rescue
			puts 'Geocoder Error'
		end
	end

	private

	def setLatLong
		address = "#{self.street}, #{self.city}, #{self.state} #{self.zip}"
		begin
			data = MultiGeocoder.geocode(address)
		rescue
			puts 'Geocoder Error'
		end
		if data
			self.update_columns(latitude: data.lat, longitude: data.lng)
		end
	end

	def set_attending
		self.attending << self.user_id.to_s
		self.save
	end
end
