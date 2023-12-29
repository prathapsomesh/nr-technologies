import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import Image from 'next/image';

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          text="First slide"
          src="/static/pcb.jpg"
          sizes="100vw"
          style={{
            width: '100%',
          }}
          width={10}
          height={10}
          className="bannerHeight"
        />
        <Carousel.Caption>
          <Card className="p-2" style={{ opacity: 0.7 }}>
            <h1>We are client oriented</h1>
            <h4>
              We focus on powerful internal and external relations built on
              trust and mutual respect.
            </h4>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          text="First slide"
          src="/static/banner1.jpg"
          sizes="100vw"
          style={{
            width: '100%',
          }}
          width={10}
          height={10}
          className="bannerHeight"
        />
        <Carousel.Caption>
          <Card className="p-2" style={{ opacity: 0.7 }}>
            <h1>We Deliver quality</h1>
            <h4>
              We utilize continuous Improvement strategies to ensure the highest
              quality products and services.
            </h4>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          text="First slide"
          src="/static/banner2.jpg"
          sizes="100vw"
          style={{
            width: '100%',
          }}
          width={10}
          height={10}
          className="bannerHeight"
        />
        <Carousel.Caption>
          <Card className="p-2" style={{ opacity: 0.7 }}>
            <h1>We are optimistic and innovative</h1>
            <h4>
              We believe that through optimism and curiosity we can strenghten
              our innovative leadership.
            </h4>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
