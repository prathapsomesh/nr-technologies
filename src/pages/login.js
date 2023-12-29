import LoginWithEmail from '@/Components/Auth/AdminLogin/LoginWithEmail';
import LoginWithPhone from '@/Components/Auth/EmployeeLogin/LoginWithPhone';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Login = () => {
  return (
    <Container fluid>
      <Row className="p-0">
        <Col md={6} className="justify-content-center">
          <LoginWithPhone />
        </Col>
        <Col md={6} className="justify-content-center">
          <LoginWithEmail />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
