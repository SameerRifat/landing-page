'use client'

import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
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
        <div className="position-relative vh-100">
            {/* Gradient Overlay */}
            <div
                className="position-absolute w-100 h-100 top-0 start-0"
                style={{
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)',
                    zIndex: 1,
                }}
            />

            {/* Animated Background Image */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity:  1 }}
                    exit={{ opacity: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="position-absolute w-100 h-100"
                    style={{
                        backgroundImage: `url(${heroContent[activeTab].backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: -10,
                    }}
                >
                    <div
                        className="position-absolute w-100 h-100"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Hero Content */}
            <div className="position-relative d-flex flex-column justify-content-between h-100 py-5" style={{ zIndex: 2 }}>
                {/* Animated Heading */}
                <Container className="mt-5 flex-grow-1 d-flex align-items-center justify-content-center mb-5">
                    <Row>
                        <Col lg={9} className="mx-auto">
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="display-4 text-white fw-bold text-center"
                                >
                                    {heroContent[activeTab].heading}
                                </motion.h2>
                            </AnimatePresence>
                        </Col>
                    </Row>
                </Container>

                {/* Tabs */}
                <Container>
                    <Row className="g-2">
                        {tabs.map((tab) => (
                            <Col key={tab.id}>
                                <motion.button
                                    onClick={() => setActiveTab(tab.id)}
                                    className="w-100 text-dark fw-normal custom-tab-button rounded-0"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{
                                        minWidth: 'fit-content',
                                        whiteSpace: 'nowrap',
                                        backgroundColor: activeTab === tab.id ? '#a98b4f' : 'rgba(255, 255, 255, 0.4)',
                                        transition: 'all 0.3s ease',
                                        fontFamily: 'var(--font-montserrat)',
                                        backdropFilter: activeTab === tab.id ? 'none' : 'blur(10px)',
                                        WebkitBackdropFilter: activeTab === tab.id ? 'none' : 'blur(10px)',
                                        border: 'none',
                                        padding: '8px 15px',
                                        color: activeTab === tab.id ? '#ffffff' : '#000000',
                                    }}
                                >
                                    {tab.label}
                                </motion.button>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Hero;