const express = require("express")
const cors = require("cors")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const port = process.env.PORT || 3003

const dbURI =
  "mongodb+srv://cameron:Amber12345@discoverr0.tkn07.mongodb.net/discoverrusers?retryWrites=true&w=majority"

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err))

// const getProducts = require("./Products.js")
app.use(cors())
app.get("/", (req, res) => res.send("Hello Node!"))
// app.get("/rest/products", (req, res) => {
//   let products = getProducts()
//   res.send(products)
// })
