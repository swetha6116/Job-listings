const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        location: {
            type: String,
            enum: ['chennai', 'bangalore'],
            required: true
        },
        deadline: {
            type: Date,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        email: {    
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            index: true,
            default: true
        },
        interestedApplicants: {
            type: Array,
            required: false,
        }
    }
)
// jobSchema.createIndex( { active: 1 } )

const job = mongoose.model('job', jobSchema);

module.exports = job;