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
q10 = Question.create!(title: "What is Ruby?", author_id: u6.id, topic_id: topic2.id)
q11 = Question.create!(title: "Do you know a psychological trick people use to manipulate others?", author_id: u7.id, topic_id: topic7.id)
q12 = Question.create!(title: "What video game made you think \"I'm just wasting my life with this video game\"? Why?", author_id: u6.id, topic_id: topic5.id)
q13 = Question.create!(title: "What are some healthy living hacks and tips?", author_id: u3.id, topic_id: topic4.id)


a1 = Answer.create!(
body:
 "<p>It would have to<strong>&nbsp;</strong>be&nbsp;<strong>Fallout 76.</strong></p><p><br></p><p>I spent a good 12 hours straight on that game and discovered why the internet was up in flames about how bad it was.</p><p><br></p><p>*first hour* I pressed on through some sorta mission after not even getting a basic tutorial. I questioned what was even the point of this, I was just killing hordes of Scorched Beasts.</p><p><br></p><p>*about 6 hours in* I'm completing one of the new public events (which felt a little like Destiny 2) that Bethesda added in for a better experience. I was about to receive my drop package when the drone that’s carrying it lags and teleports about 2 miles away. *wth* The drone starts flying back my with my hard-earned loot and drops it onto the target. I open the box and it teleports somewhere else. So I lost my loot and walked away with a feeling of rage quit like no other.</p><p><br></p><p>*about 8 hours in* I'm at these sweet looking castle ruins infested by super mutants. I was in a better mood, had enough explosives, as well as enough ammo. So I single-handedly take out 6 of the bigger ones. Immediately after I finish the rest of the mutants. This giant Scorch Beast comes out of nowhere. *I would probably try to escape it, but no, this was epic* I eventually blew the thing up enough that it seemed to be dead, *I got the lil kill signifying cha-ching* I see it start to lag twitch, and it just pops right up with full health.</p><p><br></p><p>*maybe 30 mins later* I'm still fighting the beast but… I can’t. The thing lagged into a freaking wall and it’s just crawling there. So I leave, scowling at the lagged out bullet-sponge.</p><p><br></p><p>*12 hours in* After experiencing more out of wack lag and just unexplainable gameplay problems, I quit the game.</p><p><br></p><p>I hope there's a patch soon to fix this game. As a Fallout fan, I was really disappointed.</p>",
author_id: u6.id,
question_id: q12.id,
topic_id: q12.topic_id,
upvotes: 0)

a2 = Answer.create!(
body:
 "<p><strong>Start Your Mornings with Cold Showers-&nbsp;</strong>While many of my friends and family start their day off with a nice pot of coffee, I start mine with a cold shower. Nothing gets you going like these, trust me. I first started using cold showers to protect my skin since it got so irritated by hot showers. But now, after doing cold showers consistently for over a year I can say that there are so many other benefits to them. I feel so energized after a cold shower, and feel ready to take on the day. It surprisingly is also a natural stress reliever, and helps me improve my mood! Not to mention that cold showers also boost immunity.</p><p><br></p><p><strong>Go for Daily Walks-&nbsp;</strong>I struggled with depression big time last year, and I still do from time to time today. But one major thing that has helped me in dealing with depression/anxiety is to go for long walks, preferably while listening to my favorite music. For one, being outside is a natural stress reliever and combining that with walking to my favorite music- it allows me to clear my head and keeps me from stressing out too much.</p><p><br></p><p><strong>Meditate-</strong>&nbsp;I’ll be the first to admit that I thought mediation was just a joke, and would never work. But I realized that you don’t have to live like a monk in order to reap the benefits of meditation. Just set aside 10–15 minutes per day, allowing yourself to focus inward. It really can as easy as just focusing on your breathing patterns. Stay consistent with this one, and you will see results.</p><p><br></p><p><strong>Intermittent Fasting-&nbsp;</strong>I personally like to go with the 16/8 fast, meaning that you specify an 8-hour period of the day where you don’t eat at all, and then go 16 hours without eating. While this may seem like a long time, the trick is to pick the right hours for eating so you sleep through half of the fast. When I do IF, I eat from 11 am to 7 pm, and then fast until 11 am the next day. It isn’t that hard because I go to bed around 11 and wake up at 8 so I’m sleeping through 9 hours of the fast. Whenever I do intermittent fasting I am never ravenously hungry, and food always feels more satisfying. Not to mention the whole reason intermittent fasting exists: rapid fat loss! Provided you’re still eating sensible during those 8 hours ;)</p><p><br></p><p><strong>Get Sunlight-&nbsp;</strong>If you’re looking for more energy, an improved mood, and overall sense of well-being, sunlight is your natural answer. Hardly any of us get enough of it, and without enough sunlight this can lead to depressed moods and lack of energy. Take 15–30 minutes out of every day to get outside and enjoy some rays. Even if its cloudy, you’ll still get the benefits. For those in very dark and cold climates, I recommend an artificial light therapy. I just started using one this Winter and I’m loving it!</p><p><br></p><p><strong>Exercise-&nbsp;</strong>This one should be obvious by now. Many people struggle with this one because they believe they have to put so much time and effort into it. Well, really, all you need is 3 days per week of 30–45 minutes to feel the benefits. I’m into weightlifting, and I do that twice per week, and then do sprinting/conditioning two days per week. The key is to find something you enjoy so that you can stick with it. Weightlifting, jogging, basketball, yoga- all forms of exercise have benefits to the mind and body. Just don’t overdo it.</p>",
author_id: u5.id,
question_id: q13.id,
topic_id: q13.topic_id,
upvotes: 0)
