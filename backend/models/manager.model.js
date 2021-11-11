const mongoose = require('mongoose');
const bcyrpt = require('bcrypt');
const Schema = mongoose.Schema;

const managerSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      minlength: 3,
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
    password: {
      type: String,
      required: true,
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
    dob: {
      type: Date,
      default: Date.now,
    },
    company: {
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

managerSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next;
  }
  bcyrpt.hash(this.password, 10, (err, passwordHash) => {
    if (err) {
      return next(err);
    }
    this.password = passwordHash;
    next();
  });
});

const Manager = mongoose.model('Manager', managerSchema);

module.exports = Manager;
