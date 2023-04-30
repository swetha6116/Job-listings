const express = require('express');
const session = require('express-session');
const passport = require('passport')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
// const flash= require('connect-flash')
// const ejsMate= require('ejs-mate')

const router = express.Router();
const catchasync= require('../utils/Asyncerrors')
const catchexpress= require('../utils/expresserrors')


  

const User = require('../models/user');

router.use(methodOverride('_method'))
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())

router.get('/register', (req, res) => {
    res.render('views/users/register');
})

router.post('/register', async (req, res) => {
    console.log(req.body);
    const {name, email, userType, username, password} = req.body;
    const user = new User({name, email, userType, username});
    const registeredUser = await User.register(user, password);
    console.log(registeredUser);
    // req.flash('Welcome to Bula Careers!');
    res.redirect('/login');
})


router.get('/login', (req, res) => {
    res.render('views/users/login');
})
router.post('/login',passport.authenticate('local',{ failureRedirect:'/login'}),async (req,res)=>{

    // const redirecturl = req.session.returnTo || '/jobs'
    // delete req.session.returnTo
    console.log(req.user)
    res.redirect('/jobs');
})

router.get('/login', (req, res) => {
    res.render('views/users/login');
})

router.get('/logout', (req, res) => {
    res.render('views/users/login');
})
module.exports = router;