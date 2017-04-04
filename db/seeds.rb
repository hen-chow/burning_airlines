# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

airplane_1 = Airplane.create(name: "747", row: 30, column: 7)
airplane_2 = Airplane.create(name: "757", row: 20, column: 5)
airplane_3 = Airplane.create(name: "A380", row: 70, column: 7)

User.create(name: "admin", email: "admin@admin.com", password: "password", admin: true)
