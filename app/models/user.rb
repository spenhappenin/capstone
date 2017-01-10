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
    if user = where(email: auth[:email]).first
      user.provider = provider
      user.uid = auth[:userID]
      unless user.save
        puts "errors " + user.errors.full_messages.to_sentence
      end
    else
      user = User.new
      user.email = auth[:email]
      full_name = auth[:name].split(' ')
      user.first_name = full_name.first
      user.last_name = full_name.last
      user.username = auth[:name]
      user.provider = provider
      user.uid = auth[:userID]
      user.password = Devise.friendly_token
      unless user.save
        puts "errors" + user.errors.full_messages.to_sentence
      end
    end
    user
  end

end
