const express = require("express");

const {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  checkTourId,
} = require("../controllers/tourController");

const router = express.Router();
router.param("id", checkTourId);
router.route("/").get(getAllTours).post(createTour);
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
