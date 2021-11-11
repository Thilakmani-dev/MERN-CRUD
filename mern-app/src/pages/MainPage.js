import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MainPage = () => {
  useEffect(() => {
    fetch('http://localhost:5000/employees')
      .then((res) => res.json())
      .then((res) => setemployees(res))
      .catch((err) => console.log('error while getting employees', err));
  }, []);
  const [empId, setempId] = useState(0);
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [dob, setdob] = useState(new Date());
  const [mobile, setmobile] = useState('');
  const [city, setcity] = useState('');
  const [address1, setaddress1] = useState('');
  const [state, setstate] = useState('');
  const [postalcode, setpostalcode] = useState('');
  const [employess, setemployees] = useState([]);
  const addEmployee = (e) => {
    e.preventDefault();
    const newemployee = {
      empId: empId,
      firstname: firstname,
      lastname: lastname,
      dob: dob,
      address: {
        address1: address1,
        city: city,
        state: state,
        postalcode: postalcode,
      },
      mobile: mobile,
      city: city,
    };
    fetch('http://localhost:5000/employees/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newemployee),
    })
      .then((res) => res.json())
      .then((res) => console.log('posted successfully', res))
      .catch((err) => console.log('error created while adding employee', err));
  };

  const editHandler = (id) => {
    console.log(id);
  };
  const deleteHandler = (id) => {};
  return (
    <>
      <Container
        className='my-1 mx-auto py-1 px-auto'
        style={{
          width: '50%',
          backgroundColor: '#0336FF',
          color: 'white',
          fontWeight: 'bolder',
          borderWidth: '1px',
          borderRadius: '15px',
        }}
      >
        <form onSubmit={addEmployee}>
          <Row className='m-1 p-1'>
            <Col>
              <label>Employee Id:</label>
            </Col>
            <Col>
              <input
                type='number'
                value={empId}
                onChange={(e) => setempId(e.target.value)}
                required
                style={{ borderWidth: '1px', borderRadius: '5px' }}
              />
            </Col>
          </Row>
          <Row className='m-1 p-1'>
            <Col>
              <label>First Name:</label>
            </Col>
            <Col>
              <input
                type='text'
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
                required
                style={{ borderWidth: '1px', borderRadius: '5px' }}
              />
            </Col>
          </Row>
          <Row className='m-1 p-1'>
            <Col>
              <label>Last Name:</label>
            </Col>
            <Col>
              <input
                type='text'
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
                required
                style={{ borderWidth: '1px', borderRadius: '5px' }}
              />
            </Col>
          </Row>
          <Row className='m-1 p-1'>
            <Col>
              <label>DOB:</label>
            </Col>
            <Col>
              <Datepicker onChange={setdob} selected={dob} />
              {/* <input
              type='date'
              value={dob}
              onChange={(e) => {
                console.log(e.target.value);
                setdob(e.target.value);
              }}
              required
              style={{ borderWidth: '1px', borderRadius: '5px' }}
            /> */}
            </Col>
          </Row>
          <Row className='m-1 p-1'>
            <Col>
              <label>Address 1:</label>
            </Col>
            <Col>
              <input
                type='text'
                value={address1}
                onChange={(e) => setaddress1(e.target.value)}
                required
                style={{ borderWidth: '1px', borderRadius: '5px' }}
              />
            </Col>
          </Row>
          <Row className='m-1 p-1'>
            <Col>
              <label>City:</label>
            </Col>
            <Col>
              <input
                type='text'
                value={city}
                onChange={(e) => setcity(e.target.value)}
                required
                style={{ borderWidth: '1px', borderRadius: '5px' }}
              />
            </Col>
          </Row>
          <Row className='m-1 p-1'>
            <Col>
              <label>State:</label>
            </Col>
            <Col>
              <input
                type='text'
                value={state}
                onChange={(e) => setstate(e.target.value)}
                required
                style={{ borderWidth: '1px', borderRadius: '5px' }}
              />
            </Col>
          </Row>
          <Row className='m-1 p-1'>
            <Col>
              <label>Postal Code:</label>
            </Col>
            <Col>
              <input
                type='text'
                value={postalcode}
                onChange={(e) => setpostalcode(e.target.value)}
                required
                style={{ borderWidth: '1px', borderRadius: '5px' }}
              />
            </Col>
          </Row>
          <Row className='m-1 p-1'>
            <Col>
              <label>Mobile:</label>
            </Col>
            <Col>
              <input
                type='text'
                value={mobile}
                onChange={(e) => setmobile(e.target.value)}
                required
                style={{ borderWidth: '1px', borderRadius: '5px' }}
              />
            </Col>
          </Row>
          <Row className='m-1 p-1'>
            <Col sm={4} className='mx-auto'>
              <Button variant='light' type='submit'>
                Add Employee
              </Button>
            </Col>
          </Row>
        </form>
      </Container>
      <Row>
        <Col sm={10} className='my-1 mx-auto'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>EMPLOYEE ID</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>MOBILE</th>
                <th>CITY</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {employess.length > 0
                ? employess
                    .filter((employee) => employee.deleted === false)
                    .map((employee) => (
                      <tr key={employee.empId}>
                        <td>{employee.empId}</td>
                        <td>{employee.firstname}</td>
                        <td>{employee.lastname}</td>
                        <td>{employee.mobile}</td>
                        <td>{employee.city}</td>
                        <td>
                          <Button
                            variant='primary'
                            onClick={() => editHandler(employee._id)}
                          >
                            Edit
                          </Button>
                        </td>
                        <td>
                          <Button
                            variant='danger'
                            onClick={() => deleteHandler(employee._id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))
                : null}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default MainPage;
