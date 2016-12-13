class Event < ApplicationRecord

	validates_presence_of :name, :date, :time, :venue, 
												:street, :city, :state, :zip, 
												:skill_level, :attending, :active

validates_uniqueness_of :name 

	belongs_to :sport

end
