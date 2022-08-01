class ChangeDateToBeDateInEvents < ActiveRecord::Migration[7.0]
  def change
    change_column :events, :event_date, :date
  end
end
