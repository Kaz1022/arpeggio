class Instrument < ApplicationRecord
  has_many :event_instruments
  has_many :user_instruments
  has_many :users, through: :event_instruments
  has_many :users, through: :user_instruments
end
