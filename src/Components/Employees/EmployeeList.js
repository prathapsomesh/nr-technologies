import { labels } from '@/Config/labels';
import React from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { useRouter } from 'next/router';

const EmployeeList = () => {
  const empList = [
    { id: 1, name: 'Shrihari', active: true },
    { id: 2, name: 'Suhas', active: true },
    { id: 3, name: 'Abhishek', active: false },
    { id: 4, name: 'Keerthi', active: true },
    { id: 5, name: 'Harshith', active: false },
    { id: 6, name: 'Chandan', active: false },
    { id: 7, name: 'Prashanth', active: true },
  ];

  const router = useRouter();
  const goToDetails = (id) => {
    router.push({
      pathname: 'employee/[id]',
      query: { id: id },
    });
  };

  const goToAddEmployee = () => {
    router.push({
      pathname: 'addEmployee',
    });
  };

  return (
    <Container className="my-5">
      <Row className="my-4">
        <Col md={10}>
          <h4>{labels.EMPLOYEE_LIST.HEADING}</h4>
        </Col>
        <Col md={2}>
          <Button variant="success" onClick={goToAddEmployee} className="w-100">
            {labels.EMPLOYEE_LIST.ADD_EMPLOYEE}
          </Button>
        </Col>
      </Row>
      <Row className="my-2">
        <Col md={12}>
          <Table>
            <thead>
              <tr>
                <th>{labels.EMPLOYEE_LIST.ID}</th>
                <th colSpan={8}>{labels.EMPLOYEE_LIST.NAME}</th>
                <th>{labels.EMPLOYEE_LIST.ACTION}</th>
                <th>{labels.EMPLOYEE_LIST.ACTION}</th>
                <th>{labels.EMPLOYEE_LIST.ACTIVE_STATUS}</th>
              </tr>
            </thead>
            <tbody>
              {empList.map((data) => (
                <tr key={data?.id}>
                  <td>{data?.id}</td>
                  <td colSpan={8}>{data?.name}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => {
                        goToDetails(data?.id);
                      }}
                    >
                      {labels.BUTTON.VIEW_DETAILS}
                    </Button>
                  </td>
                  <td>
                    <Button variant="danger" onClick={() => {}}>
                      {labels.BUTTON.DELETE}
                    </Button>
                  </td>
                  <td>
                    <Form.Group>
                      {/* <Form.Label>{labels.ADD_USER.ACTIVE_STATUS}</Form.Label> */}
                      <Form.Check
                        className="switch"
                        type="switch"
                        id="custom-switch"
                        size="lg"
                        name="Status"
                        checked={data?.active}
                        disabled={false}
                        onChange={(e) => {}}
                      ></Form.Check>
                    </Form.Group>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeList;
