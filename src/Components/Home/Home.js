import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner from './Banner';
import Products from './Products';

const Home = () => {
  return (
    <>
      <Banner />
      <Products />
    </>
  );
};

export default Home;
