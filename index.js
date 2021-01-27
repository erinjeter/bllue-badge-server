const express = require("express");
const sequelize = require("./db");
const movie = require("./controllers/movie-controller");

const app = express();

app.use(express.json());
app.use("/movie", movie);

sequelize.sync();

app.listen(3000, () => console.log("App listening on PORT 3000"));
