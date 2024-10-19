'use client'

import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeadingSmall from './section-heading-small';
import SectionHeading from './section-heading';
import { CustomNextArrow, CustomPrevArrow } from './slider-custom-arrows';
import { Container } from 'react-bootstrap';
import { logos } from '@/data';

const CompanyLogos = () => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnHover: false,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    return (
        <Container
            className="py-5 bg-white"
        >
            <div
                className="row justify-content-center"
            >
                <div className="col-12 text-center">
                    <SectionHeadingSmall text="Building a dream future" />
                    <SectionHeading text="Explore Our Brands" />
                </div>
            </div>
            <div
                className='row mt-4 mt-lg-5'
            >
                <div className="col-12">
                    <Slider {...settings}>
                        {logos.map((item, index) => (
                            <div className='d-flex align-items-center justify-content-center' style={{ height: '100px' }} key={index}>
                                <Image
                                    src={item.logo}
                                    alt="logo"
                                    width={200}
                                    height={35}
                                    priority={true}
                                    quality={100}
                                    className='img-fluid'
                                    style={{
                                        objectFit: 'contain',
                                        width: '180px',
                                        height: 'auto',
                                        maxWidth: '200px',
                                        maxHeight: '60px'
                                    }}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </Container>
    )
}

export default CompanyLogos