class RemoveQuantityFromEventInstruments < ActiveRecord::Migration[7.0]
  def change
    remove_column :event_instruments, :quantity, :integer
  end
end
