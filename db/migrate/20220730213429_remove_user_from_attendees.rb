class RemoveUserFromAttendees < ActiveRecord::Migration[7.0]
  def change
    remove_column :attendees, :user_id, :integer
  end
end
