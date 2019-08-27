class Removename < ActiveRecord::Migration[5.2]
  def change
    remove_column(:users, :name, :email)
    add_column :users, :username, :string
    add_index :users, :username 
  end
end
