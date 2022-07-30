class RemoveUserFromUserInstruments < ActiveRecord::Migration[7.0]
  def change
    remove_column :user_instruments, :user_id, :integer
  end
end
