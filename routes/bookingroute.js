const express = require('express');
const datarouter = express.Router();
const bookingmodel = require('../models/bookingschema');

datarouter.post("/booking", async (req, res) => {
    const { firstname, lastname, VehicleType, Vehiclesubtype, SelectestartDate, SelectelastDate } = req.body;
    try {
        const userbooking = await bookingmodel.create({
            firstname: firstname,
            lastname: lastname,
            VehicleType: VehicleType,
            SelectestartDate: SelectestartDate,
            SelectelastDate: SelectelastDate
        })
        res.status(201).json({
            status: "carbooking done successfully",
            result: userbooking
        });
    }
    catch (e) {
        res.status(404).json({
            status: "failed",
            message: e.message
        })
    }
});

module.exports = datarouter;

