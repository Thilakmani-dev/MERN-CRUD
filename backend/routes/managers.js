const Manager = require('../models/manager.model');

const router = require('express').Router();

router.route('/').get((req, res) => {
  Manager.find()
    .then((employees) => res.json(employees))
    .catch((err) => res.status(400).json('Error ' + err));
});
router.route('/add').post((req, res) => {
  const email = req.body.email;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const password = req.body.password;

  const address = req.body.address;
  const dob = Date.parse(req.body.dob);
  const company = req.body.company;
  const deleted = false;
  const newmanager = new Manager({
    email,
    firstname,
    lastname,
    password,
    address,
    dob,
    company,
    deleted,
  });
  newmanager
    .save()
    .then(() => res.json('Manager Added!'))
    .catch((err) => res.status(400).json('Error ' + err));
});

module.exports = router;
