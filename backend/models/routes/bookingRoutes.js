// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const {
  getBookingsByDate,
  addBooking,
  updateBooking,
  deleteBooking,
} = require('../controllers/bookingController');

router.get('/:date', getBookingsByDate);
router.post('/', addBooking);
router.put('/:id', updateBooking);
router.delete('/:id', deleteBooking);

module.exports = router;
