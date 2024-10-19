'use client'

import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { heroContent } from '@/data';

const Hero = () => {
    const [activeTab, setActiveTab] = useState('automotive');

    const tabs = [
        { id: 'automotive', label: 'AUTOMOTIVE' },
        { id: 'finance', label: 'FINANCE' },
        { id: 'realEstate', label: 'REAL ESTATE' },
        { id: 'technology', label: 'TECHNOLOGY' },
        { id: 'marketing', label: 'MARKETING' },
    ];

    return (
        <div className="position-relative vh-100" style={{ maxHeight: '40rem' }}>
            {/* Gradient Overlay */}
            <div
                className="position-absolute w-100 h-100 top-0 start-0"
                style={{
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)',
                    zIndex: 1,
                }}
            />
            {/* Background Image with Overlay */}
            <div
                className="position-absolute w-100 h-100"
                style={{
                    backgroundImage: `url(${heroContent[activeTab].backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'opacity 0.5s ease',
                    zIndex: -10,
                }}
            >
                <div
                    className="position-absolute w-100 h-100"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                />
            </div>

            {/* Hero Content */}
            <div className="position-relative d-flex flex-column justify-content-between h-100 py-5" style={{ zIndex: 2 }}>
                {/* Heading */}
                <Container className="mt-5 flex-grow-1 d-flex align-items-center justify-content-center mb-5">
                    <Row >
                        <Col lg={8} className="mx-auto">
                            <h2
                                className="display-4 text-white fw-bold text-center"
                                style={{
                                    transition: 'all 0.5s ease',
                                }}
                            >
                                {heroContent[activeTab].heading}
                            </h2>
                        </Col>
                    </Row>
                </Container>

                {/* Tabs */}
                <Container>
                    <Row className="g-2">
                        {tabs.map((tab) => (
                            <Col key={tab.id}>
                                <Button
                                    onClick={() => setActiveTab(tab.id)}
                                    variant="custom"
                                    className="w-100 text-dark fw-normal custom-tab-button rounded-0"
                                    style={{
                                        minWidth: 'fit-content',
                                        whiteSpace: 'nowrap',
                                        backgroundColor: activeTab === tab.id ? '#a98b4f' : 'rgba(255, 255, 255, 0.4)',
                                        transition: 'all 0.3s ease',
                                        fontFamily: 'var(--font-geist-sans)',
                                        backdropFilter: activeTab === tab.id ? 'none' : 'blur(10px)',
                                        WebkitBackdropFilter: activeTab === tab.id ? 'none' : 'blur(10px)',
                                        border: 'none',
                                        padding: '8px 15px',
                                        color: activeTab === tab.id ? '#ffffff' : '#000000',
                                        fontFamily: 'var(--font-montserrat)'
                                    }}
                                >
                                    {tab.label}
                                </Button>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Hero;