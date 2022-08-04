class RemoveUserFromUserFavourites < ActiveRecord::Migration[7.0]
  def change
    remove_column :user_favourites, :user_id, :integer
  end
end
