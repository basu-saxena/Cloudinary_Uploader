const express = require("express");
const cors = require("cors");
const url = process.env.AI_RESUME_BUILDER_URL;
const routes = require("./upload.route");
const analyseRoutes = require("./analyse.route")

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: url,
  }),
);

app.get("/", (req, res) => {
  res.send("Server is running !");
});

app.use("/api/upload", routes);
app.use("/api/analyse", analyseRoutes);

module.exports = { app };
