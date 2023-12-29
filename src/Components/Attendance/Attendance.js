import { labels } from '@/Config/labels';
import React from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';

const Attendance = () => {
  const empList = [
    { id: 1, name: 'Shrihari', active: true },
    { id: 2, name: 'Suhas', active: true },
    { id: 3, name: 'Abhishek', active: false },
    { id: 4, name: 'Keerthi', active: true },
    { id: 5, name: 'Harshith', active: false },
    { id: 6, name: 'Chandan', active: false },
    { id: 7, name: 'Prashanth', active: true },
  ];
  return (
    <Container className="my-5">
      <Row className="my-4">
        <Col md={8}>
          <h4>{labels.ATTENDANCE.HEADING}</h4>
        </Col>
        <Col md={2}>
          <Form.Control type="date" />
        </Col>
        <Col md={2}>
          <Button variant="success" onClick={() => {}} className="w-100">
            {labels.ATTENDANCE.SEARCH}
          </Button>
        </Col>
      </Row>
      <Row className="my-2">
        <Col md={12}>
          <Table>
            <thead>
              <tr>
                <th>{labels.ATTENDANCE.ID}</th>
                <th colSpan={8}>{labels.ATTENDANCE.NAME}</th>
                <th>{labels.ATTENDANCE.WORKED_HOURS}</th>
                <th>{labels.ATTENDANCE.OT_HOURS}</th>
                <th>{labels.ATTENDANCE.ADVANCE}</th>
                <th>{labels.EMPLOYEE_LIST.ACTION}</th>
              </tr>
            </thead>
            <tbody>
              {empList.map((data) => (
                <tr>
                  <td>{data?.id}</td>
                  <td colSpan={8}>{data?.name}</td>
                  <td>
                    <Form.Group>
                      <Form.Control
                        type="number"
                        name="phone"
                        id="phone"
                        size="md"
                        required
                        minLength={10}
                        maxLength={10}
                        onChange={() => {}}
                        onInput={(e) =>
                          (e.target.value = e.target.value.slice(0, 10))
                        }
                        disabled={false}
                        width={'10%'}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group>
                      <Form.Control
                        type="number"
                        name="phone"
                        id="phone"
                        size="md"
                        required
                        minLength={10}
                        maxLength={10}
                        onChange={() => {}}
                        onInput={(e) =>
                          (e.target.value = e.target.value.slice(0, 10))
                        }
                        disabled={false}
                        width={'10%'}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group>
                      <Form.Control
                        type="number"
                        name="phone"
                        id="phone"
                        size="md"
                        required
                        minLength={10}
                        maxLength={10}
                        onChange={() => {}}
                        onInput={(e) =>
                          (e.target.value = e.target.value.slice(0, 10))
                        }
                        disabled={false}
                        width={'10%'}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Button variant="success" onClick={() => {}}>
                      {labels.ATTENDANCE.SUBMIT}
                    </Button>
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

export default Attendance;
