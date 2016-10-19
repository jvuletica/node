var mongoose = require("mongoose")
Player = mongoose.model("Player")

exports.findAll = function(req, res)
{
  Player.find({}, function(err, players)
  {
    if(err) throw new Error(err)
    res.send(players)
  })
}

exports.add = function(req, res)
{
  var player = new Player(req.body)

  player.save(function(err, player)
  {
    if(err) throw new Error(err)
    res.send(player)
  })
}
