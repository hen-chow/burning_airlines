class AddColumnsToTable < ActiveRecord::Migration[5.0]
  def change
    add_column :reservations, :row, :integer
    add_column :reservations, :column, :integer
  end
end
