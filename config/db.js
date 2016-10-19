var mongoose = require("mongoose")

module.exports = function(config)
{
  mongoose.connect(config.db)
  var db = mongoose.connection

  db.on("error", () => {throw new Error("Unable to connect to database")})
  db.on("open", () => {console.log("Database connected")})
}
