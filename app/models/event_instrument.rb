class EventInstrument < ApplicationRecord
  belongs_to :event
  belongs_to :instrument
  has_many :attendees
  has_many :users, through :attendees
end