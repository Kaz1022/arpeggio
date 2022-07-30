class AddEventToEventInstruments < ActiveRecord::Migration[7.0]
  def change
    add_reference :event_instruments, :event, null: false, foreign_key: true
  end
end
