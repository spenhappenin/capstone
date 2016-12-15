class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.text :text, null: false
      t.timestamps
      t.belongs_to :user
      t.belongs_to :event
    end
  end
end
