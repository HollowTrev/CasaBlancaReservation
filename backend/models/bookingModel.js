// models/bookingModel.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  tableNumber: {
    type: Number,
    required: true,
  },
  numberOfPersons: {
    type: Number,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
