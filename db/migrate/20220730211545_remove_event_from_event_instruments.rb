class RemoveEventFromEventInstruments < ActiveRecord::Migration[7.0]
  def change
    remove_column :event_instruments, :event_id, :integer
  end
end
