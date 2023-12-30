import Image from 'next/image';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Aboutus = () => {
  return (
    <Container className="mt-3">
      <Card className="my-4">
        <Card.Header>
          <h3 className="orange">ABOUT US</h3>
        </Card.Header>
        <Row>
          <Col md={6} className="mt-2 px-4">
            <p className="products ">
              New Raj Technologies an ISO certified company, right from its
              inception in 2011 offers a winning combination of capabilities,
              resulting in benefits that go hand in hand with quality, value and
              speed. NRT has a flexibility of adopting our manufacturing
              capacity to cater to large, medium and small volume mo We strive
              to exceed customer expectations in quality, delivery and service
              by maintaining a focus on cost, quality and flexibility of our
              solutions.
            </p>
            <p className="products">
              To become the global leader in High-Mix High-Tech electronics
              manufacturing by continuous improvement in quality flexibility,
              innovation and competitiveness.
            </p>
            <p className="products">
              Our vision is to to deliver goods and services of high quality
              level and low prices that can provide complete satisfaction to our
              customers anywhere on the globe. Promote long term partnership
              with customers and suppliers. Provide complete solutions required
              to transform ideas into successful products and services. To
              develop encourage & train the employees so that they are aware of
              the relevance and importance of their activities and contribution
              to the achievement of our vision.
            </p>
          </Col>
          <Col md={6} className="mt-2 px-4">
            <Image
              className="w-100  mx-auto d-block rounded"
              src={'/static/aboutus.jpg'}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              width={10}
              height={10}
            />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Aboutus;
