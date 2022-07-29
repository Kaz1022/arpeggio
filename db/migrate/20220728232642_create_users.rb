class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :handle
      t.string :email
      t.string :password
      t.integer :phone
      t.string :profile_image
      t.string :city
      t.string :country
      t.boolean :profile_public

      t.timestamps
    end
  end
end
