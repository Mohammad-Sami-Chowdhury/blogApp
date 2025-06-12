const express = require("express");
const { generateDescription } = require("../../controller/aiController");
const router = express.Router();

router.post("/generate-description", generateDescription);

module.exports = router;