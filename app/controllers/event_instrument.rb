class EventInstrument < ActiveRecord::Base
  belongs_to :event
  belongs_to :instrument
  has_many :attendees
  # serialize :status, Array
end
