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
  email: {
    type: String,
  },
  familyName: {
    type: String,
  },
  givenName: {
    type: String,
  },
  googleId: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
})

const User = mongoose.model("User", userSchema)

module.exports = User
