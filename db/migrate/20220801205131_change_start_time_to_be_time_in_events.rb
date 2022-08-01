class ChangeStartTimeToBeTimeInEvents < ActiveRecord::Migration[7.0]
  def change
    change_column :events, :start_time, :time
  end
end
