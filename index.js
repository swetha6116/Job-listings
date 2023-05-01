if (process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const session = require('express-session')
const MongoDBStore = require("connect-mongo")(session); 

//'localhost:27017/jobListings' process.env.DB_URL
const dbUrl = 'mongodb://localhost:27017/jobListings'
const userRoutes = require('./routes/users')

const Job = require('./models/job');
const User = require('./models/user')
const { findById } = require('./models/job');

// const store = new MongoDBStore({
//     url: dbUrl, 
//     secret: 'thisisasupersecret',
//     touchAfter: 24 * 60 * 60
// });

// store.on("error", function(e) {
//     console.log("session store error", e)
// })

const sessionConfig={
  
    secret:'thisisasupersecret',
    resave:false,
    saveUninitialized:true,
    cookie:{
        httpOnly:true,
        expires:Date.now + 1000*60*60*24*7 ,
        maxAge:1000*60*60*24*7
    }
}
app.use(session(sessionConfig))


const passport = require('passport')
const LocalStrategy = require('passport-local')
//mongodb://localhost:27017/jobListings
mongoose.connect(dbUrl,  {
    useNewUrlParser: true
})

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to mongoose'))
app.set('views', path.join(__dirname), 'views');

// app.use(session(sessionConfig));
// app.use(flash());

app.use('/', userRoutes);



app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    console.log(req.user)
    res.locals.currentUser= req.user
    // console.log(req.user)
    // res.locals.success = req.flash('success')
    // res.locals.error=req.flash('error')
    next();
})

app.use('/public', express.static(__dirname+'/public'))
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


app.get('/jobs/new', (req, res) => {
    res.render('views/jobs/new')
})

app.post('/jobs', async (req, res) => {
    const newJob = new Job(req.body)
    await newJob.save()
    console.log(newJob)
    res.redirect(`jobs`)
})

app.get('/jobs', async (req, res) => {
    console.log("cur user" + req.user)
    const jobs = await Job.find({active: true})
    const curUser = req.user

    console.log(jobs)
    res.render('views/jobs/index', { jobs,  curUser})
})

app.get('/jobs/archived', async (req, res) => {
    const jobs = await Job.find({active: false})
    console.log(jobs)
    res.render('views/jobs/archived', { jobs })
})


app.get('/jobs/:id', async (req, res) => {
    const {id} = req.params;
    const job = await Job.findById(id)
    console.log(job)
    res.render('views/jobs/show', {job})

})

app.get('/jobs/:id/edit', async (req, res) => {
    const {id} = req.params;
    const job = await Job.findById(id)
    res.render('views/jobs/edit', {job})

})

app.put('/jobs/:id', async (req, res) => {
    const { id } = req.params;
    const job = await Job.findByIdAndUpdate(id, req.body,{ active: true } ,{ runValidators: true, new: true})
    console.log(req.body)
    res.redirect(`/jobs`);
})


app.post('/interested/jobs/:id', async (req, res) => {
    const { id } = req.params;
    job = await Job.findById(id)
    interestedApplicants = job.interestedApplicants
    if (interestedApplicants.includes(req.user.username)) {
        interestedApplicants.splice(interestedApplicants.indexOf(req.user.username))
        job = await Job.findByIdAndUpdate(id, {interestedApplicants: interestedApplicants})
        console.log("not interested now")
    } else {
        interestedApplicants.push(req.user.username)
        job = await Job.findByIdAndUpdate(id, {interestedApplicants: interestedApplicants})
    }

    console.log(interestedApplicants)
    console.log(req.body)
    res.redirect(`/jobs`);
})

app.delete('/jobs/:id', async (req, res) => {
    const { id } = req.params;
    const deletedJob = await Job.findByIdAndDelete(id)
    res.redirect('/jobs');
})

app.post('/jobs/:id', async (req, res) => {
    
    const { id } = req.params;
    console.log(req.id)
    const archivedJob = await Job.findByIdAndUpdate(id, {active: false})
    res.redirect('/jobs');
    
})

app.on('error', (err) => {
    console.error('Unhandled error:', err);
    // Additional error handling logic if needed
  });

app.listen(3000, () => {
    console.log("listening on port 3000")
})
