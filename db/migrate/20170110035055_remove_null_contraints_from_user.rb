class RemoveNullContraintsFromUser < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :first_name, :string, null: true
    change_column :users, :last_name, :string, null: true
    change_column :users, :dob, :string, null: true
  end
end
