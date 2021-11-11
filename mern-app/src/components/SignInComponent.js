import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const SignInComponent = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const login = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
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
      <form onSubmit={login}>
        <Row className='m-1 p-1'>
          <Col>
            <label>Email:</label>
          </Col>
          <Col>
            <input
              type='email'
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
              style={{ borderWidth: '1px', borderRadius: '5px' }}
            />
          </Col>
        </Row>
        <Row className='m-1 p-1'>
          <Col>
            <label>Password:</label>
          </Col>
          <Col>
            <input
              type='password'
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              style={{ borderWidth: '1px', borderRadius: '5px' }}
            />
          </Col>
        </Row>
        <Row className='m-1 p-1'>
          <Col sm={4} className='mx-auto'>
            <Button variant='light' type='submit'>
              Login
            </Button>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default SignInComponent;
