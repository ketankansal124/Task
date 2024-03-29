const express = require("express");
const { addSubmission, getAllSubmission } = require("../controllers/Submission");
const router = express.Router();

router.post("/submissions", addSubmission);
router.get("/submissions", getAllSubmission);

module.exports = router;