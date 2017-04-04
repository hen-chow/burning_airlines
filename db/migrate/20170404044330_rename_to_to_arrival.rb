class RenameToToArrival < ActiveRecord::Migration[5.0]
  def change
    rename_column :flights, :to, :arrival
    rename_column :flights, :from, :departure
  end
end
