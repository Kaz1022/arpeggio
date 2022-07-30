class User < ApplicationRecord
  has_many :events, :user_favourites :user_instruments
  has_many :instruments, through : :user_instruments
  has_many :favourites, through : :user_favourites
end
