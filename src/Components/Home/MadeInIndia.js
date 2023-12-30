import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const MadeInIndia = () => {
  return (
    <Container fluid className="mt-4" style={{ backgroundColor: ' #919191' }}>
      <Row>
        <Col
          md={3}
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Image
            className="mx-auto d-block rounded m-5"
            src={'/static/anb.png'}
            sizes="100vw"
            style={{
              width: '30%',
              height: 'auto',
            }}
            width={10}
            height={10}
          />
        </Col>
        <Col
          md={3}
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Image
            className=" mx-auto d-block rounded m-5"
            src={'/static/makeinindia.png'}
            sizes="100vw"
            style={{
              width: '80%',
              height: 'auto',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            width={10}
            height={10}
          />
        </Col>
        <Col
          md={3}
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Image
            className="mx-auto d-block rounded m-5"
            src={'/static/iso5.png'}
            sizes="100vw"
            style={{
              width: '80%',
              height: 'auto',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            width={10}
            height={10}
          />
        </Col>

        <Col
          md={3}
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <h5 className="m-5">
            <span className="flagSafron">
              We are proud that we are part of <strong>Make in India</strong>{' '}
            </span>
            <span className="flagWhite">
              intiative of <strong>Govt of India</strong>, We harness{' '}
            </span>
            <span className="flagGreen">
              the power of the indian manufacturing ecosystem of our clients.
            </span>
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default MadeInIndia;
