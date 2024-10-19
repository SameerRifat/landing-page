'use client'

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import SectionHeadingSmall from './section-heading-small';
import SectionHeading from './section-heading';

const LatestNews = () => {
    return (
        <Container className="my-5">
            <Row className="align-items-center mb-4">
                <Col>
                    <SectionHeadingSmall text="Lorem ipsum dolor" />
                    <SectionHeading text="LATEST NEWS" />
                </Col>
                <Col sm="auto">
                    <Button variant="primary" className="text-uppercase px-4 rounded-0" style={{ backgroundColor: '#c9a963', borderColor: '#c9a963', fontFamily: 'var(--font-montserrat)' }}>
                        Read More News <span>&rarr;</span>
                    </Button>
                </Col>
            </Row>
            <Row>
                {[1, 2].map((item) => (
                    <Col md={6} key={item} className="mb-4">
                        <Card className="border-0 position-relative overflow-hidden rounded-0">
                            <Card.Img
                                variant="top"
                                src="/car-image.png"
                                alt="Car in foggy conditions"
                                className="w-100"
                            />
                            <div
                                className="position-absolute top-0 start-0 w-100 h-100"
                                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                            ></div>
                            <Card.ImgOverlay
                                className="position-absolute bottom-0 start-0 w-100 d-flex flex-column justify-content-end p-0"
                                style={{ height: 'auto' }}
                            >
                                <div className=' p-3' style={{background: 'rgba(194, 157, 85, 0.8)', maxWidth: '400px', backdropFilter: '8px'}}>
                                    <Card.Title className="text-white mb-3 responsive-paragraph">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae quam rutrum
                                    </Card.Title>
                                    <Card.Text className="mb-0" style={{fontFamily: 'var(--font-montserrat)', color: '#0c2646'}}>
                                        14 OCT 2024 &nbsp;&nbsp; AUTOMOTIVE
                                    </Card.Text>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default LatestNews