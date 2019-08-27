# == Schema Information
#
# Table name: users
#
#  id       :bigint           not null, primary key
#  username :string
#

class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    

    has_many :artworks, 
        foreign_key: :artist_id, 
        class_name: :Artwork,
        dependent: :destroy

    has_many :viewed_artworks,
    through: :artworks,
    source: :shares,
    dependent: :destroy

    has_many :comments, 
        foreign_key: :user_id, 
        class_name: :Comment,
        dependent: :destroy 

   
    



end 
