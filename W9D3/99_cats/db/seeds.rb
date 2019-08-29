# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.destroy_all

c1 = Cat.create!(birth_date: "2016/05/21", color: "black", name: "kitty", sex: "M", description: "I love my owner!")
c2 = Cat.create!(birth_date: "2014/02/21", color: "tabby", name: "Botero", sex: "F", description: "I love food!")
c3 = Cat.create!(birth_date: "2018/07/21", color: "orange", name: "Lino", sex: "F", description: "I don't care!")
c4 = Cat.create!(birth_date: "2011/09/21", color: "white", name: "Gobo", sex: "M", description: "I love mindfulness!")
c5 = Cat.create!(birth_date: "2015/08/21", color: "tuxedo", name: "Nala", sex: "F", description: "I love to sleep!")