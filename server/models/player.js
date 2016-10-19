var mongoose = require("mongoose")

var Schema = mongoose.Schema

var Player = new Schema({name: String, surname: String, dob: Number}, {versionKey: false})
mongoose.model("Player", Player)
