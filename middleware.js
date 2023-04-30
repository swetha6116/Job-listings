module.exports.loggedin =(req,res,next)=>{
    if(!req.isAuthenticated()){
       req.flash('error','Sign in to view')
       return res.redirect('/login')
    }
    else{
     next();
    }
  }

//   module.exports.storeReturnTo = (req, res, next) => {
//     if (req.session.returnTo) {
//         res.locals.returnTo = req.session.returnTo;
//     }
//     next();
// }