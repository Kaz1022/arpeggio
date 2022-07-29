class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.integer :user_id
      t.string :title
      t.integer :event_date
      t.integer :start_time
      t.integer :end_time
      t.string :city
      t.string :country
      t.string :level
      t.string :venue_style
      t.string :genre
      t.string :event_image
      t.string :description
      t.boolean :post_active

      t.timestamps
    end
  end
end
