# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Testing that this works!"

Airplane.destroy_all
Flight.destroy_all
User.destroy_all
Reservation.destroy_all

airplane_1 = Airplane.create(name: "747", row: 30, column: 7)
airplane_2 = Airplane.create(name: "757", row: 20, column: 5)
airplane_3 = Airplane.create(name: "A380", row: 70, column: 7)

admin = User.create(name: "admin", email: "admin@admin.com", password: "password", admin: true)
user_1 = User.create(name: "Hen", email: "hen@admin.com", password: "password")
user_2 = User.create(name: "Kevin", email: "kevin@admin.com", password: "password" )

flight_1 = Flight.create(number: 123, date: "05/04/2017", arrival: "Melbourne", departure: "Sydney", airplane_id: airplane_1.id)
flight_2 = Flight.create(number: 234, date: "05/04/2017", arrival: "Brisbane", departure: "Hobart", airplane_id: airplane_1.id)
flight_3 = Flight.create(number: 222, date: "06/04/2017", arrival: "Sydney", departure: "Adelaide", airplane_id: airplane_2.id)
flight_4 = Flight.create(number: 100, date: "07/04/2017", arrival: "Perth", departure: "Adelaide", airplane_id: airplane_2.id)
flight_5 = Flight.create(number: 333, date: "07/04/2017", arrival: "Melbourne", departure: "Sydney", airplane_id: airplane_3.id)
flight_6 = Flight.create(number: 309, date: "27/04/2017", arrival: "Melbourne", departure: "Sydney", airplane_id: airplane_3.id)

reservation_1 = Reservation.create(user_id: admin.id, flight_id: flight_1.id, column: 0, row: 0)
reservation_2 = Reservation.create(user_id: admin.id, flight_id: flight_2.id, column: 2, row: 3)
reservation_3 = Reservation.create(user_id: admin.id, flight_id: flight_3.id, column: 4, row: 5)
reservation_4 = Reservation.create(user_id: admin.id, flight_id: flight_1.id, column: 6, row: 5)
reservation_5 = Reservation.create(user_id: admin.id, flight_id: flight_5.id, column: 2, row: 7)
reservation_6 = Reservation.create(user_id: admin.id, flight_id: flight_6.id, column: 4, row: 9)

puts "Seed file uploaded"
