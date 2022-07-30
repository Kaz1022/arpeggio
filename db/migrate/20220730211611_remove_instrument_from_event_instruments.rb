class RemoveInstrumentFromEventInstruments < ActiveRecord::Migration[7.0]
  def change
    remove_column :event_instruments, :instrument_id, :integer
  end
end
