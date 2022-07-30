class RemoveEventInstrumentFromAttendees < ActiveRecord::Migration[7.0]
  def change
    remove_column :attendees, :event_instrument_id, :integer
  end
end
