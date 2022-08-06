class RemoveImageFromEvents < ActiveRecord::Migration[7.0]
  def change
    remove_column :events, :event_image
  end
end
