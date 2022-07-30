class RemoveEventFromUserFavourites < ActiveRecord::Migration[7.0]
  def change
    remove_column :user_favourites, :event_id, :integer
  end
end
