class CreateEventInstruments < ActiveRecord::Migration[7.0]
  def change
    create_table :event_instruments do |t|
      t.integer :event_id
      t.integer :instrument_id
      t.integer :quantity
      t.string :status

      t.timestamps
    end
  end
end
