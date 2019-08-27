# == Schema Information
#
# Table name: artworks
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string           not null
#  artist_id  :integer          not null
#  img_url    :string           not null
#
    

#
# Table name: artworks
#
#  id         :bigint           not null, primary key
#  title      :string
#  img_url    :string
#  artist_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artwork < ApplicationRecord
    validates :title, :img_url, :artist_id, presence: true
    validates :title, uniqueness: {scope: :artist_id}
    

    belongs_to :artist, 
        foreign_key: :artist_id, 
        class_name: :User 

    has_many :shares,
    foreign_key: :artwork_id,
    class_name: :ArtworkShare

    has_many :shared_viewers,
    through: :shares,
    source: :viewer

    has_many :comments, 
        foreign_key: :artwork_id, 
        class_name: :Comment, 
        dependent: :destroy 
         
         
    has_many :likes, 
        as: :likable 

    def self.all_artwork_for_user(user_id)
        Artwork.left_outer_joins(:shares).where('artist_id = :user_id OR artwork_shares.viewer_id = :user_id', user_id: user_id)
        
    end 
    
    




end
