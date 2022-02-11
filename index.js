
require('dotenv').config();

const mongoose = require('mongoose')
const User = require('./models/user')
const OnboardingScreen = require('./models/onboardingScreen')

mongoose.connect(process.env.MONGO_DB)

const db = mongoose.connection

db.on('error', err => {
    console.log('error', err)
})

db.once('open', () => {
    console.log('we have connection')
})


const user = new User({
    name: "Alex",
    sex: "male",
    age: 30,
    country: "USA"
})

console.log("USER", user)


const onboarding = new OnboardingScreen({
    title: "1111",
    subtitle: "1111",
    answers: [
        {
            _id: mongoose.Schema.Types.ObjectId,
            answerTitle: "1111",
            answerSubtitle: "1111",
            icon: true,
            created: {
                type: Date,
                default: Date.now
            }
        },
        {
            _id: mongoose.Schema.Types.ObjectId,
            answerTitle: "1221",
            answerSubtitle: "1221",
            icon: false,
            created: {
                type: Date,
                default: Date.now
            }
        }
    ]
})

console.log("ONBOARDING", onboarding)

// user.save()
// onboarding.save()

// User.find({}, (err, users) => {
//     console.log(err, users)
// })

// User.deleteOne({}, (err, users) => {
//     console.log(err, users)
//   })

