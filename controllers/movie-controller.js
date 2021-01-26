const express = require("express");
const router = express.Router();
const sequelize = require("../db");
const Movie = sequelize.import("../models/movies");

router.post("/", (req, res) => {
  Movie.create({
    name: req.body.name,
  }).then(
    (movie) => {
      res.status(200).json({ message: "Movie Created", movie: movie });
    },
    (err) => {
      res.status(500).json({ error: err });
    }
  );
});

module.exports = router;
