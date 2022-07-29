class CreateAttandees < ActiveRecord::Migration[7.0]
  def change
    create_table :attandees do |t|
      t.integer :user_id
      t.integer :event_instrument_id
      t.boolean :accepted

      t.timestamps
    end
  end
end
