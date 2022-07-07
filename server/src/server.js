const http = require("http");

const app = require("./app");

const { loadPlanentsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startSever() {
  await loadPlanentsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startSever();
