class AddEventToUserFavourites < ActiveRecord::Migration[7.0]
  def change
    add_reference :user_favourites, :event, null: false, foreign_key: true
  end
end
