class AddInstrumentToUserInstruments < ActiveRecord::Migration[7.0]
  def change
    add_reference :user_instruments, :instrument, null: false, foreign_key: true
  end
end
