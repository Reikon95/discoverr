const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  bio: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
})

const User = mongoose.model("User", userSchema)

module.exports = User
