'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import SectionHeadingSmall from './section-heading-small';
import SectionHeading from './section-heading';
import { milestonesContent } from '@/data';
import { motion, AnimatePresence } from 'framer-motion';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const years = [
    { id: 1, year: '2009' },
    { id: 2, year: '2010' },
    { id: 3, year: '2011' },
    { id: 4, year: '2012' },
    { id: 5, year: '2013' },
    { id: 6, year: '2014' },
    { id: 7, year: '2015' },
];

const MilestonesSection = () => {
    const [selectedYear, setSelectedYear] = useState(3);
    const sliderRef = useRef(null);
    const [slidesToShow, setSlidesToShow] = useState(5);

    // Update slidesToShow and selectedYear based on window width
    useEffect(() => {
        const handleResize = () => {
            const isSmallScreen = window.innerWidth < 768;
            setSlidesToShow(isSmallScreen ? 3 : 5);
            setSelectedYear(prevYear => isSmallScreen ? 2 : prevYear);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calculate the slide index to center the selected year
    const calculateSlideIndex = (yearId) => {
        const totalSlides = years.length;
        const halfVisible = Math.floor(slidesToShow / 2);

        let slideIndex = yearId - 1 - halfVisible;

        // Prevent sliding past the beginning
        if (slideIndex < 0) {
            slideIndex = 0;
        }

        // Prevent sliding past the end
        if (slideIndex + slidesToShow > totalSlides) {
            slideIndex = totalSlides - slidesToShow;
        }

        return slideIndex;
    };

    const handleYearClick = (yearId) => {
        setSelectedYear(yearId);
        const slideIndex = calculateSlideIndex(yearId);
        sliderRef.current.slickGoTo(slideIndex);
    };

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnHover: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            }
        ],
        beforeChange: (current, next) => {
            // Ensure the selected year stays visible
            const visibleRange = {
                start: next,
                end: next + (slidesToShow - 1)
            };

            const selectedIndex = selectedYear - 1;
            if (selectedIndex < visibleRange.start || selectedIndex > visibleRange.end) {
                setSelectedYear(years[Math.floor((visibleRange.start + visibleRange.end) / 2)].id);
            }
        }
    };

    return (
        <div className="position-relative py-5">
            {/* Background Image */}
            <AnimatePresence>
                <motion.div
                    key={selectedYear}
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.3 }}
                    transition={{ duration: 0.5 }}
                    style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -10 }}
                >
                    <Image
                        src={milestonesContent[selectedYear].backgroundImage}
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        priority
                    />
                </motion.div>
            </AnimatePresence>

            {/* Overlay */}
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.5, zIndex: -5, backgroundColor: 'rgba(0, 0, 0, 1)' }}></div>

            {/* Content */}
            <Container className="position-relative" style={{ zIndex: 20 }}>
                <Row className="mb-5">
                    <Col>
                        <SectionHeadingSmall text="Innovating in the" className="text-capitalize" />
                        <SectionHeading text="Lorem ipsum dolor" className="text-capitalize text-white" />
                    </Col>
                </Row>

                <Row className="mb-4 custom-margin">
                    <Col md={12} className='text-center mx-auto'>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedYear}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <SectionHeading text={milestonesContent[selectedYear].heading} className="text-capitalize text-white" />
                                <p className="text-white mb-0 responsive-paragraph" style={{ marginTop: '-15px', maxWidth: '750px', margin: '0 auto' }}>
                                    {milestonesContent[selectedYear].text}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <Slider ref={sliderRef} {...settings}>
                            {years.map((item) => (
                                <div key={item.id} className="text-center">
                                    <div
                                        className="pt-3 cursor-pointer transition-all duration-300"
                                        style={{
                                            borderTop: item.id === selectedYear ? '3px solid #fff' : '2px solid #ffffff80'
                                        }}
                                        onClick={() => handleYearClick(item.id)}
                                    >
                                        <motion.h2
                                            className="mb-0 year"
                                            style={{
                                                color: item.id === selectedYear ? '#a98b4f' : '#ffffff80',
                                                fontFamily: 'var(--font-dm-serif-text)',
                                            }}
                                            animate={{
                                                scale: item.id === selectedYear ? 1.2 : 1
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {item.year}
                                        </motion.h2>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MilestonesSection;