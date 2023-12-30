import { labels } from '@/Config/labels';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavbarTop = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <Image
              src="/nrt.png"
              width={55}
              height={55}
              alt="Picture of the author"
              className="mr-5"
              quality={100}
            />
            <span style={{ marginLeft: '10px' }}>{labels.navbar.title}</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <Link href="/products" className="links">
                {labels.navbar.links.products}
              </Link>
              <Link href="/about" className="links">
                {labels.navbar.links.about}
              </Link>
              <Link href="/quality" className="links">
                {labels.navbar.links.quality}
              </Link>
              <Link href="/contact" className="links">
                {labels.navbar.links.contact}
              </Link>
              {/* <Link href="/login" className="links">
                {labels.navbar.links.login}
              </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarTop;
