class User < ApplicationRecord
  has_many :events, :user_favourites :user_instruments
end
