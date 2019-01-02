# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Topic.destroy_all
User.destroy_all
Question.destroy_all
Answer.destroy_all
Comment.destroy_all

topic0 = Topic.create!(id: 0, name: "Feed")
topic1 = Topic.create!(id: 1, name: "Miscellaneous")
topic2 = Topic.create!(name: "Programming")
topic3 = Topic.create!(name: "Exercise")
topic4 = Topic.create!(name: "Healthy Living")
topic5 = Topic.create!(name: "Gaming")
topic6 = Topic.create!(name: "Sports")
topic7 = Topic.create!(name: "Psychology")
topic8 = Topic.create!(name: "Higher Education")
topic9 = Topic.create!(name: "Science")
topic10 = Topic.create!(name: "Biology")
topic11 = Topic.create!(name: "Bridge")

u1 = User.create!(username: "DemoUser", email: "demo@email.com", password: "starwars")
u2 = User.create!(username: "Edward", email: "eddd.lu@gmail.com", password: "starwars")
u3 = User.create!(username: "Pikachu", email: "pikachu@pokemail.com", password: "starwars")
u4 = User.create!(username: "Snorlax", email: "snorlax@pokemail.com", password: "starwars")
u5 = User.create!(username: "Charizard", email: "charizard@pokemail.com", password: "starwars")
u6 = User.create!(username: "Blastoise", email: "blastoise@pokemail.com", password: "starwars")
u7 = User.create!(username: "Venusaur", email: "venusaur@pokemail.com", password: "starwars")

q1 = Question.create!(title: "What is your name?", author_id: u2.id, topic_id: topic11.id)
q2 = Question.create!(title: "What is your quest?", author_id: u2.id, topic_id: topic11.id)
q3 = Question.create!(title: "What is your favorite color?", author_id: u3.id, topic_id: topic11.id)
q4 = Question.create!(title: "What is a question?", author_id: u4.id, topic_id: topic8.id)
q5 = Question.create!(title: "Who won the Superb Bowl?", author_id: u4.id, topic_id: topic6.id)
q6 = Question.create!(title: "How many Pokemon are there in the world?", author_id: u5.id, topic_id: topic5.id)
q7 = Question.create!(title: "How many chromosomes are in the human genome?", author_id: u6.id, topic_id: topic10.id)
q8 = Question.create!(title: "How many pushups can you do at once?", author_id: u7.id, topic_id: topic3.id)
q9 = Question.create!(title: "How big is the universe?", author_id: u7.id, topic_id: topic9.id)
