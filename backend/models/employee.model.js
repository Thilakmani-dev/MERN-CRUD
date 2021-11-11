const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema(
  {
    empId: {
      type: Number,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
      minlength: 3,
    },
    lastname: {
      type: String,
      required: true,
      minlength: 3,
    },
    dob: {
      type: Date,
      default: Date.now,
    },
    address: {
      address1: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      postalcode: { type: String },
    },
    mobile: {
      type: String,
      required: true,
      minlength: 10,
      trim: true,
    },
    city: {
      type: String,
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
