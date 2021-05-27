const router = require("express").Router()
const bcrypt = require("bcrypt")

let User = require("../models/user.model")

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err))
})

router.route("/adduser").post(async (req, res) => {
  const userID = req.body.id
  const userName = req.body.name
  const userBio = req.body.bio
  const userEmail = req.body.email
  const userHashedPassword = await bcrypt.hash(req.body.password, 10)

  const newUser = new User({
    id: userID,
    name: userName,
    bio: userBio,
    email: userEmail,
    password: userHashedPassword,
  })

  newUser
    .save()
    .then(() => res.json("User registered"))
    .catch((err) => res.status(400).json("Error: " + err))
})

module.exports = router
