class AddUserToUserFavourites < ActiveRecord::Migration[7.0]
  def change
    add_reference :user_favourites, :user, null: false, foreign_key: true
  end
end
