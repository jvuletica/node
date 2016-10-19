var express = require("express")

module.exports = function(app)
{
  app.use(require("body-parser").json())
  // app.use(require("method-override"))
}
