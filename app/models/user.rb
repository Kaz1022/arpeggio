class User < ApplicationRecord
  has_secure_password

  validates :email, presence: true
  validates :email, uniqueness: true, presence: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  
  has_many :events
  has_many :instruments, through: :user_instruments
  has_many :user_instruments
  has_many :user_favourites
end
