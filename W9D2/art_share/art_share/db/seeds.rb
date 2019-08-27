# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ArtworkShare.destroy_all
User.destroy_all 
Artwork.destroy_all
Comment.destroy_all


user1 = User.create!(username: 'frida5')
user2 = User.create!(username: 'alex4')
user3  = User.create!(username: 'JM45')

art1 = Artwork.create!( title: 'Mountains', artist_id: user1.id, img_url: 'mountains.io')
art2 = Artwork.create!( title: 'Waves', artist_id: user2.id, img_url: 'waves.io')
art3 = Artwork.create!( title: 'Plains', artist_id: user3.id, img_url: 'plains.io')
art4 = Artwork.create!( title: 'Rivers', artist_id: user1.id, img_url: 'rivers.io')

share1 = ArtworkShare.create!(artwork_id: art1.id, viewer_id: user2.id)
share2 = ArtworkShare.create!(artwork_id: art2.id, viewer_id: user1.id)
share3 = ArtworkShare.create!(artwork_id: art3.id, viewer_id: user1.id)

comment1 = Comment.create!(user_id: user1.id, artwork_id: art2.id, body: 'I love the ocean too!')
comment2 = Comment.create!(user_id: user3.id, artwork_id: art2.id, body: 'Can I surf there?')
comment3 = Comment.create!(user_id: user2.id, artwork_id: art4.id, body: 'That river is so calming!')
