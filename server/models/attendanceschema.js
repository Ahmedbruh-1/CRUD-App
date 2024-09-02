const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  totalSalary: {
    type: Number,
    required: true
  },
  totalPresents: {
    type: Number,
    required: true
  },
  totalAbsents: {
    type: Number,
    required: true
  },
  deduction: {
    type: Number,
    required: true
  },
  netSalary: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  feedback: {
    type: String,
    required: true
  }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
