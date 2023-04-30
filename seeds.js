const mongoose = require('mongoose');
const Job = require('./models/job');

mongoose.connect('mongodb://localhost:27017/jobListings',  {
    useNewUrlParser: true
})

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to mongoose'))

// const j = new Job({
//     title: "Marketing Specialist",
//     description: "We are looking for a marketing specialist with experience in social media and digital marketing.",
//     location: "chennai",
//     deadline: new Date("2023-06-30"),
//     phone: "9486558751",
//     email: "marketing@example.com"
// })

// j.save().then(j => {
//     console.log(j)
// })

const seedJobs = [
    {
        title: "Marketing Specialist",
        description: "We are looking for a marketing specialist with experience in social media and digital marketing.",
        location: "chennai",
        deadline: new Date("2023-06-30"),
        phone: "9486558751",
        email: "marketing@example.com",
        active: true,
    },
    {
        title: "Software Engineer",
        description: "We are looking for a software engineer with experience in ReactJS and NodeJS.",
        location: "bangalore",
        deadline: new Date("2023-05-15"),
        phone: "9486558752",
        email: "jobs@example.com",
        active: true,
    },
    {
        title: "Data Analyst test deleted",
        description: "We are looking for a data analyst with experience in SQL and data visualization tools.",
        location: "chennai",
        deadline: new Date("2023-05-05"),
        phone: "9486558753",
        email: "data@example.com",
        active: false,
    }
]

Job.insertMany(seedJobs)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })

// db.jobs.insertOne{
//     title: "Data Analyst test deleted",
//     description: "We are looking for a data analyst with experience in SQL and data visualization tools.",
//     location: "chennai",
//     deadline: new Date("2023-05-05"),
//     phone: "9486558753",
//     email: "data@example.com",
//     active: false,
// })
