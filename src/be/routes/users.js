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
  console.log(req, res)

  // new google route, this needs to check for a duplicate (ideally via email)
  // other than that, goes through normal process
  // possibly, the check should happen BEFORE the post request #
  // takes place, so we aren't making unneeded calls.

  // newUser
  //   .save()
  //   .then(() => res.json("User registered"))
  //   .catch((err) => res.status(400).json("Error: " + err))
})

module.exports = router


// new route????
