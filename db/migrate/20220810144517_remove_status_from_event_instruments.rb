class RemoveStatusFromEventInstruments < ActiveRecord::Migration[7.0]
  def change
    remove_column :event_instruments, :status, :text
  end
end
