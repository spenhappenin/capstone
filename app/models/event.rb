class Event < ApplicationRecord

	validates_presence_of :name, :date, :time, :venue,
												:street, :city, :state, :zip,
												:skill_level, :attending, :active

	belongs_to :sport
	belongs_to :user

end
