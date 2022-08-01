class User < ApplicationRecord
  has_many :events
  has_many :instruments, through: :user_instruments
  has_many :user_instruments
  has_many :user_favourites
end
