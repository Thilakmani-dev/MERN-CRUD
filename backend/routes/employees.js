const router = require('express').Router();
let Employee = require('../models/employee.model');

router.route('/').get((req, res) => {
  Employee.find()
    .then((employees) => res.json(employees))
    .catch((err) => res.status(400).json('Error ' + err));
});
router.route('/edit').post((req, res) => {});
router.route('/add').post((req, res) => {
  const empId = Number(req.body.empId);
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const address = req.body.address;
  const dob = Date.parse(req.body.dob);
  const mobile = Number(req.body.mobile);
  const city = req.body.city;
  const deleted = false;
  const newemployee = new Employee({
    empId,
    firstname,
    lastname,
    address,
    dob,
    mobile,
    city,
    deleted,
  });
  newemployee
    .save()
    .then(() => res.json('Employee Added!'))
    .catch((err) => res.status(400).json('Error ' + err));
});

module.exports = router;
