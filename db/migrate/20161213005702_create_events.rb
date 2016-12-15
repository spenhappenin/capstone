class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.date :date, null: false
      t.time :time, null: false
      t.integer :capacity
      t.string :venue, null: false
      t.string :street, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip, null: false
      t.string :skill_level, null: false
      t.text :description
      t.boolean :attending, null: false
      t.boolean :active, null: false

      t.timestamps
    end
  end
end