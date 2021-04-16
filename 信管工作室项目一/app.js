var express = require('express')
var router = require('./router.js')
var bodyParser = require('body-parser')
var session = require('express-session')

var app = express()

app.engine('html', require('express-art-template'))

// 配置
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

app.use('/public/', express.static('./public/'))
app.use('/static/', express.static('./static/'))
app.use('/views/', express.static('./views/'))
app.use(router)


app.listen(3000, function() {
    console.log('app is running at port 3000')
})
