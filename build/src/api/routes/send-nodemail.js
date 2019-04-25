const express = require("express");
const router = express.Router();
const NodemailController = require("../controllers/send-nodemail");

// routes
router.post("/portfolio", NodemailController.nodemail);
module.exports = router;
