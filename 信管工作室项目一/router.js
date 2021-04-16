var express = require('express')
var User = require('./user')
var router = express.Router()

var indexstatus = {
    pending: '你好，请登陆！',
}

router.get('/index', function (req, res) {
    console.log(indexstatus)
    res.render('index.html',indexstatus)
})
router.get('/login', function (req, res) {

    res.render('login.html')
})
router.post('/login', function (req, res) {
    User.findOne(req.body,function (err,user) {
        if (err) {
            return res.status(500).send('Server error.')
        } else if (user) {
            req.session.user = user
            indexstatus = {
                success: `你好，${req.session.user.username}！`,
                logout:'退出登陆'
            }
            res.redirect('/index')
        }  else {
            res.render('login.html',{
                nperror: 'ID或者密码错误！'
            })
        }
    })
})
router.get('/register', function (req, res) {
    res.render('register.html')
})
router.post('/register', function (req, res) {
    var body = req.body
    User.findOne({ username: body.username }, (err, data) => {
        if (err) {
            return res.status(500).send('Server error.')
        } else if (data) {
            console.log(2)
            res.render('register.html', {
                usernameerror: `${body.username}已经存在！`
            })
        }  else {
            User.findOne({ email: body.email }, (err, data) => {
                if (err) {
                    return res.status(500).send('Server error.')
                } else if (data) {
                    console.log(2)
                    res.render('register.html', {
                        emailerror: `${body.email}已经存在！`
                    })
                }  else {
                    new User(body).save(function (err,user) {
                        if (err) {
                            console.log(err)
                            console.log('保存失败了！')
                            return res.status(500).send('Server error.')
                        } else {
                            console.log('保存成功了！')
                            res.redirect('/login')
                        }
                    })
                }
            })
        }
    })


})
router.get('/logout', function (req, res) {
    indexstatus = {
        pending: '你好，请登陆！',
    }
    res.redirect('/index')
})

module.exports = router;
