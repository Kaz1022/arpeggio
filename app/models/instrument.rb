class Instrument < ApplicationRecord
  has_many :event_instruments
  has_many :users, through: :event_instruments
end
