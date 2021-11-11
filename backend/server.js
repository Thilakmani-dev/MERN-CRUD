const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

const managerRouter = require('./routes/managers');
const employeeRouter = require('./routes/employees');

app.use('/managers', managerRouter);
app.use('/employees', employeeRouter);

app.listen(port, () => {
  console.log('Server listening on port no ', port);
});
