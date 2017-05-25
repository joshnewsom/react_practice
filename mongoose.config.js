const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/chores2')
const db = mongoose.connection

const userSchema = new Schema({
  username: String,
  password: String
})
mongoose.model('User', userSchema)

const choreSchema = new Schema({
  name: String,
  user: {
    type: String, // TODO: change this to Schema.Types.ObjectId
    ref: 'User'
  },
  days: {
    type: Array,
    enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  complete: {
    type: Boolean,
    default: false
  }
})
mongoose.model('Chore', choreSchema)

module.exports = mongoose
