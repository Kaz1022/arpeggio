class User < ApplicationRecord
  has_many :events
  has_many :instruments, through: :user_instruments
  has_many :favourites, through: :user_favourites
end
