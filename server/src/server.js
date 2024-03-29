const http = require("http");

const app = require("./app");
const { mongoConnect } = require("./services/mongo");
const dotenv = require("dotenv").config();

const { loadPlanetsData } = require("./models/planets.model");
const { loadLaunchData } = require("./models/launches.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startSever() {
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchData();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startSever();
