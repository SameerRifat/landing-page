import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FooterLinkSection = ({ title, links }) => (
  <Col sm={4} lg={3} className="mb-4 mb-lg-0">
    <h5 className="mb-3 fs-5" style={{ color: '#c29d55', }}>{title}</h5>
    <ul className="list-unstyled">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url} className="text-light text-decoration-none" style={{fontFamily: 'var(--font-montserrat)', fontSize: '0.85rem'}}>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </Col>
);

const Footer = () => {
  const footerSections = [
    {
      title: "Who We Are",
      links: [
        { text: "Our History", url: "#" },
        { text: "Our Founder", url: "#" },
        { text: "Our Leadership", url: "#" },
        { text: "Our Companies", url: "#" },
        { text: "Awards", url: "#" },
      ]
    },
    {
      title: "What We Do",
      links: [
        { text: "Automotive", url: "#" },
        { text: "Finance", url: "#" },
        { text: "Real Estate", url: "#" },
        { text: "Technology", url: "#" },
      ]
    },
    {
      title: "Quick Links",
      links: [
        { text: "Media Hub", url: "#" },
        { text: "Publications", url: "#" },
        { text: "Contact Us", url: "#" },
        { text: "Careers", url: "#" },
      ]
    }
  ];

  return (
    <footer className="text-light pt-5 pb-4" style={{ background: '#0c2646' }}>
      <Container>
        <Row className="mb-5">
          <Col lg={3} md={6} className="mb-4 mb-lg-0" style={{fontFamily: 'var(--font-montserrat)'}}>
            <h2 className="text-white mb-4">COMPANY LOGO</h2>
          </Col>
          {footerSections.map((section, index) => (
            <FooterLinkSection key={index} title={section.title} links={section.links} />
          ))}
        </Row>
        <hr className="bg-secondary" />
        <Row className="mt-3" style={{fontFamily: 'var(--font-montserrat)'}}>
          <Col md={6} className="text-center text-md-start">
            <small>&copy; 2024 Company | All Rights Reserved</small>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="#" className="text-light text-decoration-none me-3">
              <small>Terms & Conditions</small>
            </a>
            <a href="#" className="text-light text-decoration-none">
              <small>Privacy Policy</small>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;