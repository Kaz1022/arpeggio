class EventInstrument < ApplicationRecord
  belongs_to :event
  belongs_to :instrument
end
