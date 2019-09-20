const db = require("../data/dbConfig");

module.exports = {
  getCats
};

function getCats() {
  return db("animals").select("cats");
}
