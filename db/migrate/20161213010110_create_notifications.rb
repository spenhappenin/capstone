class CreateNotifications < ActiveRecord::Migration[5.0]
  def change
    create_table :notifications do |t|
      t.string :notification_type, null: false
      t.text :text, null: false
      t.string :delivery_preference, null: false

      t.timestamps
    end
  end
end
