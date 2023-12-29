import { labels } from '@/Config/labels';
import Image from 'next/image';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Employee = () => {
  const content = [
    { label: labels.PROFILE.NAME, value: 'Shrihari' },
    { label: labels.PROFILE.PHONE, value: 9483997774 },
    { label: labels.PROFILE.EMAIL, value: 'shri.hari940@gmail.com' },
    { label: labels.PROFILE.DESIGNATION, value: 'Manger' },
    { label: labels.PROFILE.UTYPE, value: 'Employee' },
    { label: labels.PROFILE.STATUS, value: 'Active' },
  ];
  return (
    <Container className="mt-4">
      <h2>{labels.PROFILE.HEADING}</h2>
      <Card body className="my-3">
        <Row className="my-3">
          <Col md={4}>
            <Image
              src={'/nrt.png'}
              alt="profile photo"
              width={300}
              height={300}
            />
          </Col>
          <Col md={8}>
            {content.map((data, i) => (
              <Row className="my-3" key={i}>
                <Col xs={4}>
                  <h5 className="bold">{data.label}</h5>
                </Col>
                <Col xs={8}>{data.value}</Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Employee;
