class ChangeStartTimeToBeTimeInEvents < ActiveRecord::Migration[7.0]
  def change
    remove_column :events, :start_time
    add_column :events, :start_time, :time
  end
end
