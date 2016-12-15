class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def self.from_third_party_auth(provider, auth)
  	where(provider: provider, uid: auth[:userID]).first_or_create do |user|
  		user.email = auth[:email]
  		user.password = Devise.friendly_token
  	end
  end 

  has_many :events
  has_many :comments

  validates_presence_of :first_name, :last_name, :dob
  validates_uniqueness_of :username
  validates_inclusion_of :role, in: %w(user admin)
end
