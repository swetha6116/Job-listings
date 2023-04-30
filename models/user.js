const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {    
            type: String,
            required: true,
            unique: true
        },
        userType: {
            type: String,
            enum: ['applicant', 'recruiter'],
            required: true
        }
    }
)


userSchema.plugin(passportLocalMongoose); //this will add usernames and passwords and make sure usernames are unique

const user = mongoose.model('User', userSchema);

module.exports = user;