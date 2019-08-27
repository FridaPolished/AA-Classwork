class UpdateArtwork < ActiveRecord::Migration[5.2]
  def change
    remove_column :artworks, :title
    remove_column :artworks, :artist_id 
    remove_column :artworks, :img_url 

    add_column :artworks, :title, :string, null: false
    add_column :artworks, :artist_id, :integer, null: false 
    add_column :artworks, :img_url, :string, null: false 
    
    add_index :artworks, [:artist_id, :title], unique: true 
    
  end
end
