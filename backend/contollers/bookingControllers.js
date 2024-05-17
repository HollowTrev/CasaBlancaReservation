// controllers/bookingController.js
const Booking = require('../models/bookingModel');

// @desc    Get all bookings for a specific date
// @route   GET /api/bookings/:date
// @access  Public
const getBookingsByDate = async (req, res) => {
  try {
    const bookings = await Booking.find({ date: req.params.date });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Add a new booking
// @route   POST /api/bookings
// @access  Public
const addBooking = async (req, res) => {
  const { fullname, email, contactNo, roomType, tableNumber, numberOfPersons, startTime, endTime, purpose, date } = req.body;

  const newBooking = new Booking({
    fullname,
    email,
    contactNo,
    roomType,
    tableNumber,
    numberOfPersons,
    startTime,
    endTime,
    purpose,
    date,
  });

  try {
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update a booking
// @route   PUT /api/bookings/:id
// @access  Public
const updateBooking = async (req, res) => {
  const { fullname, email, contactNo, roomType, tableNumber, numberOfPersons, startTime, endTime, purpose, date } = req.body;

  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    booking.fullname = fullname;
    booking.email = email;
    booking.contactNo = contactNo;
    booking.roomType = roomType;
    booking.tableNumber = tableNumber;
    booking.numberOfPersons = numberOfPersons;
    booking.startTime = startTime;
    booking.endTime = endTime;
    booking.purpose = purpose;
    booking.date = date;

    const updatedBooking = await booking.save();
    res.json(updatedBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete a booking
// @route   DELETE /api/bookings/:id
// @access  Public
const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    await booking.remove();
    res.json({ message: 'Booking removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getBookingsByDate,
  addBooking,
  updateBooking,
  deleteBooking,
};
