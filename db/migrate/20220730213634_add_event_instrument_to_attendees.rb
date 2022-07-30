class AddEventInstrumentToAttendees < ActiveRecord::Migration[7.0]
  def change
    add_reference :attendees, :event_instrument, null: false, foreign_key: true
  end
end
