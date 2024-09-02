const express = require("express");
const router = express.Router();
const users = require("../models/userschema");
const Attendance = require("../models/attendanceschema");


router.post('/attendance', async (req, res) => {
    const { id, name, totalSalary, totalPresents, totalAbsents, deduction, netSalary, date, feedback } = req.body;

    try {
        if (!id || !name || !totalSalary || !totalPresents || !totalAbsents || !deduction || !netSalary || !date || !feedback) {
            return res.status(422).json("Please fill out all fields");
        }
        const preuser = await users.findOne({userid:id});

        if (!preuser) {
            return res.status(404).json("User not found");
        }
        const attendance = new Attendance({
            id,
            name,
            totalSalary,
            totalPresents,
            totalAbsents,
            deduction,
            netSalary,
            date,
            feedback
        });

        await attendance.save();

        res.status(201).json({
            message: "Attendance record has been saved",
            data: {
                attendance
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});
// GETTING ATTENDANCE DATA
router.get("/getattendances", async (req, res) => {
    try {    
        const allUsers = await Attendance.find();
        return res.status(200).json({ allUsers });
    } catch (error) {
        return res.status(500).json({ message: "Failed to fetch users", error: error.message });
    }
});


module.exports = router;
