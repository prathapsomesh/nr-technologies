import Image from 'next/image';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Quality = () => {
  return (
    <Container className="mt-3">
      <Card className="my-4">
        <Card.Header>
          <h3 className="orange">QUALITY</h3>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6} className="mt-2">
              <Image
                className="w-100  mx-auto d-block rounded "
                src={'/static/quality.jpg'}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                width={10}
                height={10}
              />
            </Col>
            <Col md={6} className="mt-2 ">
              <p className="products">
                Quality of our services is integrated with quality of human
                resources. At SST, we firmly believe that the quality of its
                human resources delivers the qualit of products. We consciously
                and continuously put in efforts to train our human resource to
                achieve higher levels of performance and to acquire higher
                grades of technical skills. Employees are motivated through
                Appreciation Certificates distributed by MD. Machine
                maintenance, offices standardization, line markings, and other
                58 initiatives are undertaken line- wise and champions are
                allocated.
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Quality;
