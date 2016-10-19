const express = require("express")
const app = express()

var config = require("./config/config")

//models
require("./server/models/player")
//init Database
require("./config/db")(config)
//configure express
require("./config/express")(app)
//configure routes
require("./config/routes")(app)

app.listen(3000, () => {console.log("Listening on port: 3000")})
