const mongoose = require('mongoose');

const bookingdetails = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    VehicleType: { type: String, required: true },
    SelectestartDate: { type: String, required: true },
    SelectelastDate: { type: String, required: true }

})

const bookingmodel = mongoose.model('booking', bookingdetails);
module.exports = bookingmodel;