class Event < ApplicationRecord
  belongs_to :user
  has_many :instruments, through: :event_instruments
  has_many :event_instruments
  has_many :attendees, through: :event_instruments
  has_many :event_instruments
end
