var express = require('express')
var router = express.Router()

router.get('/index', function(req, res) {

    res.render('index.html')
})
router.get('/login', function(req, res) {
    res.render('login.html')
})
router.post('/login', function(req, res) {

})
router.get('/register', function(req, res) {
    res.render('register.html')
})
router.post('/register', function(req, res) {
    res.redirect('/login')
})
router.get('/logout', function(req, res) {

})

module.exports = router;