var express = require('express')
var router = require('./router.js')
var bodyParser = require('body-parser')

var app = express()

app.engine('html', require('express-art-template'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/public/', express.static('./public/'))
app.use('/static/', express.static('./static/'))
app.use('/views/', express.static('./views/'))
app.use(router)


app.listen(3000, function() {
    console.log('app is running at port 3000')
})
