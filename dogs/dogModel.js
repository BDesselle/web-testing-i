const db = require("../data/dbConfig");

module.exports = {
  getDogs,
  addAnimals
};

function getDogs() {
  return db("animals").select("dogs");
}

function addAnimals(animals) {
  return db("animals").insert(animals);
}
