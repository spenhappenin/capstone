class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :dob, null: false
      t.string :phone_number
      t.string :picture
      t.string :role, default: 'user'
      t.string :reliability
      t.string :favorite
      t.string :availability

      t.timestamps
    end
  end
end
