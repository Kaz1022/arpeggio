class AddStatusToEventInstruments < ActiveRecord::Migration[7.0]
  def change
    add_column :event_instruments, :status, :text, array: true, default: '{}'
  end
end
