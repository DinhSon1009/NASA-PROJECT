const { getAllPlanenets } = require("../../models/planets.model");

function getAllPlanets(req, res) {
  return res.status(200).json(getAllPlanenets());
}

module.exports = {
  getAllPlanets,
};
