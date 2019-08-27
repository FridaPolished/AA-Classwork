# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  artwork_id :integer          not null
#  body       :text             not null
#

class Comment < ApplicationRecord
    validates :user_id, :artwork_id, :body, presence: true 
    validates :body, length: { minimum: 1}


    belongs_to :user, 
        foreign_key: :user_id, 
        class_name: :User 

    belongs_to :artwork, 
        foreign_key: :artwork_id, 
        class_name: :Artwork 

     has_many :likes, 
        as: :likable 

    def self.comments_for_user(user_id)
        Comment.joins(:user).where('users.id = user_id', user_id: user_id)
    end
    
    def self.comments_for_artwork(artwork_id)
        Comment.joins(:artwork).where('artworks.id = artwork_id', artwork_id: artwork_id)
    end

end 
