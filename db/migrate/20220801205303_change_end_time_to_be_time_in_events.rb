class ChangeEndTimeToBeTimeInEvents < ActiveRecord::Migration[7.0]
  def change
    remove_column :events, :end_time
    add_column :events, :end_time, :time
  end
end
