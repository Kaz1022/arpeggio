class User < ApplicationRecord
  has_many :events, :user_favourites :user_instruments
  has_many :instruments, through : :user_instruments
end
