class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :events
  has_many :comments

  validates_presence_of :first_name, :last_name, :dob
  validates_uniqueness_of :username
  validates_inclusion_of :role, in: %w(user admin)
end
