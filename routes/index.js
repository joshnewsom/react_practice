const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const mongoose = require('../mongoose.config')
const User = mongoose.model('User')
const Chore = mongoose.model('Chore')

router.get('/', function(req, res, next) {
  res.sendStatus(200)
})

router.post('/signup', function(req, res, next) {
  var user = new User(req.body.data)

  bcrypt.hash(user.password, 10)
    .then(function(hash) {
      user.password = hash
      return user.save()
    })
    .then(function(saved) {
      res.status(200).send(user)
    })
})

router.post('/login', function(req, res, next) {
  let pass = req.body.data.password,
    username

  User.findOne({
      username: req.body.data.username
    })
    .then(function(user) {
      if (user) {
        username = user.username
        return bcrypt.compare(pass, user.password)
      } else {
        res.status(500).send('user not found')
      }
    })
    .then(function(match) {
      if (match) {
        res.status(200).send(username)
      } else {
        res.status(500).send('Bad password')
      }
    })
})

router.post('/chores', function (req, res, next) {
  console.log('***', req.body.data, '***')
  let chore = new Chore(req.body.data)
  console.log('chore:', chore)
  chore.save(function (err, saved) {
    if (err) console.error(err)
    else console.log(saved)
  })
})

module.exports = router
