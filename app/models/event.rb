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
	before_save :setLatLong

	acts_as_mappable
	include Geokit::Geocoders

	def lat
		self.latitude
	end

	def lng
		self.longitude
	end

	private

	def setLatLong
		address = "#{self.street}, #{self.city}, #{self.state}"
		begin
			data = MultiGeocoder.geocode(address)
		rescue
			puts 'Geocoder Error'
		end
		if data.lat && data.lng
			self.latitude = data.lat
			self.longitude = data.lng
		else
			self.latitude = '40.7609915'
			self.longitude = '-111.8828799'
		end
	end

	def set_attending
		self.attending << self.user_id.to_s
		self.save
	end
end
