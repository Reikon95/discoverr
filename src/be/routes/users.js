const router = require("express").Router()

let User = require("../models/user.model")

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err))
})

router.route("/adduser").post((req, res) => {
  console.log(req, res)
  const reqBody = req.body
  const userID = req.body.id
  const userName = req.body.name
  const userBio = req.body.bio
  const newUser = new User({ id: userID, name: userName, bio: userBio, googleId: reqBody.googleId })

  newUser
    .save()
    .then(() => res.json("User registered"))
    .catch((err) => res.status(400).json("Error: " + err))
})

router.route("/addgoogleuser").post((req, res) => {
  const newGoogleUser = new User({ 
  name: req.body.name,
  email: req.body.email,
  familyName: req.body.familyName,
  givenName: req.body.givenName,
  googleId: req.body.googleId,
  imageUrl: req.body.imageUrl
})
console.log(newGoogleUser)

  newGoogleUser
    .save().then(() => console.log(newGoogleUser))
    .then(() => res.json("GOOGLE User registered"))
    .catch((err) => res.status(400).json("Error: " + err))


})

module.exports = router


