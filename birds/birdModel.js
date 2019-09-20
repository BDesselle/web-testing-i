const db = require("../data/dbConfig");

module.exports = {
  getBirds
};

function getBirds() {
  return db("animals").select("birds");
}
