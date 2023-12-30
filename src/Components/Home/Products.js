import React, { useState } from 'react';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

const Products = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleClickScroll = (item) => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Container className="mt-5" id="products">
        <Card className="my-4">
          <Card.Header>
            <h3 className="orange">PRODUCTS</h3>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={4} className="mt-2">
                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Carousel.Item>
                    <Image
                      className="w-100 mx-auto d-block rounded"
                      src={'/static/electronicpcb.jpg'}
                      width={300}
                      height={300}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className="w-100  mx-auto d-block rounded"
                      src={'/static/pcb-assembly-mac.jpeg'}
                      width={300}
                      height={300}
                      alt="second slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col md={8} className="mt-2">
                <p className="products">
                  New Raj technologies undertake Manufacturing, Delivering and
                  Servicing of populated printed circuit boards,
                  Electromechanical assemblies and transformers for electronic
                  assembles.
                </p>
                <p className="products">
                  We offer a one-stop solution from prototype to product cycle
                  Management. RoHS and leaded production options Prototyping
                  SMTA Automatic optical inspection Turnkey Solution
                  through-hole assembly.
                </p>
                <p className="products">
                  # of Stuffing Lines: 6# of CLR lines: 12Shift Capacity: 250+
                  wide range of test support In circuit testing Functional Test
                  firmware & System Test.
                </p>
                <p className="products">
                  All of our assembly services are housed in a modern and
                  environmentally controlled facility. Surface mount assembly
                  Single and double sided. Through Hole assembly hand soldering/
                  Hand placement BGA, Box Build, Cable Assembly, Functional
                  Circuit board testing, Rapid prototypes, ROHS Complaint IC
                  Programming.
                </p>
                <Button variant="outline-dark" onClick={handleClickScroll}>
                  Enquire now
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Products;
