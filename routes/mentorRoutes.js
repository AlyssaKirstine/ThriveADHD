const router = require("express").Router();
const mentorControllers = require("../controllers/mentorControllers");
const axios = require('axios');

// "/api/mentors/:id"
router.route("/mentors/:id")
  .post(mentorControllers.create)
// "/api/mentors/"
router.route("/mentors/")
  .get(mentorControllers.find);

module.exports = router;