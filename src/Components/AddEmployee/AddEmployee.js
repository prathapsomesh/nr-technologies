import { labels } from '@/Config/labels';
import React, { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Row,
} from 'react-bootstrap';

const AddEmployee = () => {
  const [values, setValues] = useState({
    fullName: '',
    phone: '',
    email: '',
    designation: '',
    userType: 'user',
    userStatus: 'new',
    idCardImage: '/hello',
    idCardDocPath: 'hello',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Container className="my-3">
      <Row className="d-flex justify-content-center">
        <Col md={6}>
          <h4 className="my-4">{labels.ADD_EMPLOYEE.HEADING}</h4>
          <Form onSubmit={() => {}} id={'addEmployee'}>
            <Form.Group className="mb-3">
              <Form.Control
                type="letters"
                name="fullName"
                placeholder="Full Name *"
                id="fullName"
                size="md"
                required
                value={values.fullName}
                onChange={handleChange}
                disabled={false}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="phone"
                placeholder="Phone *"
                id="phone"
                size="md"
                required
                minLength={10}
                maxLength={10}
                value={values.phone}
                onChange={handleChange}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 10))}
                disabled={false}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email Id "
                id="emailregister"
                size="md"
                value={values.email}
                onChange={handleChange}
                disabled={false}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="designation"
                name="designation"
                placeholder="Designation *"
                id="designation"
                size="md"
                required
                value={values.designation}
                onChange={handleChange}
                disabled={false}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="salary"
                placeholder="Salary *"
                id="designation"
                size="md"
                required
                value={values.designation}
                onChange={handleChange}
                disabled={false}
              />
            </Form.Group>
            <DropdownButton
              id="dropdown-basic-button"
              title="Salary Credit type"
              variant="secondary"
              className="mb-3 w-100"
            >
              <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Cash</Dropdown.Item>
            </DropdownButton>
            <Form.Group className="mb-3">
              <Form.Label>
                <strong>
                  {labels.ADD_EMPLOYEE.PHOTO_UPLOAD}
                  <span className="card-format">
                    {labels.ADD_EMPLOYEE.ID_CARD_FORMAT}
                  </span>
                  <span>{labels.ADD_EMPLOYEE.ID_CARD_MANDATORY}</span>
                </strong>
              </Form.Label>
              <Form.Control
                type="file"
                id="files"
                className="hidden"
                accept="image/*"
                required
                onChange={() => {}}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <strong>
                  {labels.ADD_EMPLOYEE.ID_CARD_UPLOAD}
                  <span className="card-format">
                    {labels.ADD_EMPLOYEE.ID_CARD_FORMAT}
                  </span>
                  <span>{labels.ADD_EMPLOYEE.ID_CARD_MANDATORY}</span>
                </strong>
              </Form.Label>
              <Form.Control
                type="file"
                id="files"
                className="hidden"
                accept="image/*"
                required
                onChange={() => {}}
              />
            </Form.Group>

            <Button
              variant="success"
              type="submit"
              size="md"
              id="request otp"
              disabled={false}
            >
              {labels.ADD_EMPLOYEE.SUBMIT}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddEmployee;
