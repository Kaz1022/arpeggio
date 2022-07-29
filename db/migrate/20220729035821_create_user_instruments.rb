class CreateUserInstruments < ActiveRecord::Migration[7.0]
  def change
    create_table :user_instruments do |t|
      t.integer :user_id
      t.integer :instrument_id
      t.string :level

      t.timestamps
    end
  end
end
