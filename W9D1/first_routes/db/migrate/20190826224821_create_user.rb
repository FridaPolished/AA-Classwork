class CreateUser < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name, null: false 
      t.string :email, null: false 
      t.index :name
      t.index :email
    end
  end
end
