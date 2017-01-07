class ChangeAttendingColumnOnEvents < ActiveRecord::Migration[5.0]
  def change
    change_column :events, :attending, :text
  end
end
