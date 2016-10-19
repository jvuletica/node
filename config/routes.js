var rest = require("../server/controllers/rest")

module.exports = (app) =>
{
  app.get("/", (req, res) => {console.log("root GET"); res.send({test: "radi"})})
  app.get("/api", rest.findAll)
  app.post("/api", rest.add)
  app.put("/api", (req, res) => {})
  app.delete("/api", (req, res) => {})
}
