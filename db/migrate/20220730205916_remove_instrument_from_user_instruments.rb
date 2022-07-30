class RemoveInstrumentFromUserInstruments < ActiveRecord::Migration[7.0]
  def change
    remove_column :user_instruments, :instrument_id, :integer
  end
end
