const express = require("express");
const configSchema = require("../models/config");

const router = express.Router();

// CREATE CONFIG
router.post("/config", (req, res) => {
  const config = configSchema(req.body);
  config
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
