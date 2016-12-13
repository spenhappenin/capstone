class Sport < ApplicationRecord

	validates_presence_of :category
	validates_uniqueness_of :category

	has_many :sport_events, dependent: :destroy
	has_many :events, through: :sport_events
end
