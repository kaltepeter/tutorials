class AddNullFalseToShouts < ActiveRecord::Migration[5.2]
  def change
    change_column_null :shouts, :user_id, false
    change_column_null :shouts, :content_id, false
    change_column_null :shouts, :content_type, false
  end
end
