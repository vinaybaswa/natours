const express = require("express");

const {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  checkTourId,
  checkBody,
} = require("../controllers/tourController");

const router = express.Router();
router.param("id", checkTourId);
router.route("/").get(getAllTours).post(checkBody, createTour);
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
