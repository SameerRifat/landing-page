'use client'

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import SectionHeading from './section-heading';
import SectionHeadingSmall from './section-heading-small';

const StatItem = ({ icon, number, text }) => (
  <Col xs={6} lg={4} className='d-flex align-items-center stat-item'>
    <Image
      src={`/${icon}-icon.png`}
      alt={text}
      width={100}
      height={0}
      quality={100}
      priority
      style={{ height: 'auto' }}
      className="responsive-image"
    />
    <div>
      <h2 className="display-4 fw-bold responsive-stat-item" style={{ fontFamily: 'var(--font-dm-serif-text)', color: '#0c2646' }}>{number}</h2>
      <h5 className="responsive-stat-text fw-medium">{text.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</h5>
    </div>
  </Col>
);

const InfoSection = () => {
  const stats = [
    { icon: 'subsidiary', number: '13', text: 'Subsidiary\nCompanies' },
    { icon: 'customer', number: '75k', text: 'Customer\nCommunity' },
    { icon: 'location', number: '10', text: 'Locations Across\nThe Globe' },
  ];

  return (
    <Container className="py-5">
      <Row className="justify-content-center mb-5 mx-0">
        <Col xs={12} sm={8}>
          <div>
            <SectionHeadingSmall text="EMPOWER YOUR JOURNEY" />
            <SectionHeading text="LOREM IPSUM DOLOR SIT AMET" />
            <p className='responsive-paragraph'>
              Vivamus libero purus, scelerisque sit amet odio non, dignissim placerat metus.
              Donec laoreet luctus condimentum. Pellentesque id pretium nulla,
              elementum dapibus lectus. Vivamus et nulla consectetur, vehicula massa ac,
              pellentesque sem. Cras eget massa sem.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={4} className="d-flex justify-content-center align-items-center">
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <SectionHeadingSmall text="SINCE" className="text-center" />
            <SectionHeading text="2015" className="display-4 responsive-year" style={{ marginTop: '-10px', fontFamily: 'var(--font-dm-serif-text)' }} />
          </div>
        </Col>
      </Row>

      <Row className="w-100 mx-0 g-5">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </Row>

      <style jsx global>{`
        @media (max-width: 768px) {
          .responsive-image {
            width: 70px !important;
            height: auto !important;
          }
        }
      `}</style>
    </Container>
  );
};

export default InfoSection;