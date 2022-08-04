class ChangeDateToBeDateInEvents < ActiveRecord::Migration[7.0]
  def change
    remove_column :events, :event_date
    add_column :events, :event_date, :date
  end
end
