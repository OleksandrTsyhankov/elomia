
const mongoose = require('mongoose')

const onboardingScreenSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    answers: [{
        _id: mongoose.Schema.Types.ObjectId,
        answerTitle: String,
        answerSubtitle: String,
        icon: Boolean,
        created: { 
            type: Date,
            default: Date.now
        }
    }]
})

const OnboardingScreen = mongoose.model('OnboardingScreen', onboardingScreenSchema)
module.exports = OnboardingScreen
