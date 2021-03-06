const router = require("express").Router()

let User = require("../models/user.model")

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err))
})

router.route("/finduseremail").get((req, res) => {
  User.find({ email: req.email }).then((users) => res.json(users))
})

router.route("/getuserbyid").get((req, res) => {
  const desiredID = req.url
  const queryParams = desiredID.split("?")[1].split("=")[1]
  console.log(queryParams)
  User.find({ googleId: queryParams }).then((users) => res.json(users))
})

router.route("/adduser").post((req, res) => {
  const reqBody = req.body
  const userID = req.body.id
  const userName = req.body.name
  const userBio = req.body.bio
  const newUser = new User({
    id: userID,
    name: userName,
    bio: userBio,
    googleId: reqBody.googleId,
  })

  newUser
    .save()
    .then(() => res.json("User registered"))
    .catch((err) => res.status(400).json("Error: " + err))
})

router.route("/addgoogleuser").post(async (req, res) => {
  const newGoogleUser = new User({
    name: req.body.name,
    email: req.body.email,
    familyName: req.body.familyName,
    givenName: req.body.givenName,
    googleId: req.body.googleId,
    imageUrl: req.body.imageUrl,
  })
  const duplicate = await User.findOne({ email: newGoogleUser.email })
  console.log(duplicate)
  if (!duplicate) {
    newGoogleUser
      .save()
      .then(() => res.json("GOOGLE User registered"))
      .catch((err) => res.status(400).json("Error: " + err))
  }
})

router.route("/updateuserdetails").post((req, res) => {
  console.log(req)
  User.updateOne(
    { email: req.body.email },
    {
      bio: req.body.bio,
      instagram: req.body.instagram,
      facebook: req.body.facebook,
      age: req.body.age,
    }
  ).then((users) => res.json(users))
})

module.exports = router
