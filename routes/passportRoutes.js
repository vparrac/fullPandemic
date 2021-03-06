// Define routes.
const passport = require('passport');
var express = require('express');
var router = express.Router();


router.get('/login',
  function(req, res){
    res.render('login');
  });
  
router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });
  
router.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });

router.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
  });


router.get('/getUser', (req, res)=>{
  return res.json(req.user || null)
})

module.exports = router;