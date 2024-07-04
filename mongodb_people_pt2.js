// Question 1
db.people.insertOne({first_name: 'Johnny', last_name: 'Doey', email: 'johnnykarate@kicking.com', gender: 'Male', age: 25, state: 'Michigan', children: []})

// Question 2
db.people.insertOne({first_name: 'Wilber', last_name: 'Johnson', email: 'whatemail@email.com', gender: 'Male', age: 40, state: 'California', children: [{name: 'Suzy', age: 3}, {name: 'Billy', age: 7}]})

// Question 3
db.people.updateOne({first_name: 'Clarence', state: 'North Dakota'}, {$set: {state: 'South Dakota'}})

// Question 4
db.people.updateOne({first_name: 'Rebecca', last_name: 'Hayes'}, {$set: {email: ''}})

// Question 5
db.people.updateMany({state: 'Missouri'}, {$inc: {age: 1}})

// Question 6
db.people.updateOne({first_name: 'Jerry', last_name: 'Baker'}, {$set: { first_name: "Jerry", last_name: "Baker-Mendez", email: "jerry@classic.ly", gender:"Male", age: 28, state: "Vermont", "children": [{name: "Alan", age: 18}, {name: "Jenny", age: 3}] }})

// Question 7
db.people.deleteOne({first_name: 'Wanda', last_name: 'Bowman'})

// Question 8
db.people.deleteMany({email: null})

// Question 9
db.people.createIndex({email: 1})

// Question 10
db.people.createIndex({first_name: 1, last_name: 1})

// Question 11
db.submissions.insertMany([{title: "The River Bend", upvotes: 10, downvotes: 2, artist: db.people.findOne({first_name: 'Anna', last_name: 'Howard'})._id}, {title: "Nine Lives", upvotes: 7, downvotes: 0, artist: db.people.findOne({first_name: 'Scott', last_name: 'Henderson'})._id}, {title: "Star Bright", upvotes: 19, downvotes: 3, artist: db.people.findOne({first_name: 'Andrea', last_name: 'Burke'})._id}, {title: "Why Like This?", upvotes: 1, downvotes: 5, artist: db.people.findOne({first_name: 'Steven', last_name: 'Marshall'})._id}, {title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: db.people.findOne({first_name: 'Gerald', last_name: 'Bailey'})._id}])

// Question 12
db.submissions.updateOne({title: 'The River Bend'}, {$inc: {upvotes: 2}})

// Question 13
db.submissions.updateMany({upvotes: {$gte: 10}}, {$set: {round2: true}})

// Extended Challenges

// Question 14
db.people.updateOne({first_name: 'Helen', last_name: 'Clark'}, {$set: {children: [{name: 'Earl', age: 2}, {name: 'Melanie', age: 0}]}})

// Question 15
db.people.updateOne({first_name: 'Joan', last_name: 'Bishop', 'children.name': 'Catherine'}, {$set: {'children.$.name': 'Cat'}, $inc: {'children.$.age': 1}})

// Question 16
db.submissions.find({$expr: {$gt: ["$downvotes", "$upvotes"]}})
