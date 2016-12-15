class CreateUserEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :user_events do |t|
      t.belongs_to :event
      t.belongs_to :user 
      t.timestamps
    end
  end
end
