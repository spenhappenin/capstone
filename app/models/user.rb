class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :events, through: :user_events
  has_many :user_events, dependent: :destroy
  has_many :comments

  validates_uniqueness_of :username
  validates_inclusion_of :role, in: %w(user admin)

  def self.from_third_party_auth(provider, auth)
    where(provider: provider, uid: auth[:userID]).first_or_create do |user|
      user.email = auth[:email]
      user.password = Devise.friendly_token
    end
  end

end
