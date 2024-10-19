'use client'

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import SectionHeadingSmall from './section-heading-small';
import SectionHeading from './section-heading';

const InnovatingSection = () => {
    return (
        <div className="position-relative py-5">
            {/* Background Image */}
            <Image
                src="/innovating1.png"
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
                style={{
                    zIndex: -10
                }}
            />

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
                    <Col md={8} lg={7} className='text-center mx-auto'>
                        <SectionHeading text="Lorem ipsum dolor" className="text-capitalize text-white" />
                        <p className="text-white mb-0 responsive-paragraph" style={{ marginTop: '-15px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae quam rutrum
                        </p>
                    </Col>
                </Row>

                <Row>
                    <div className="w-100 position-relative mb-3" style={{ height: '2px', background: '#ffffff80' }}>
                        <div
                            className="bg-white position-absolute start-50 rounded-3"
                            style={{
                                height: '4px',
                                width: '20%',
                                top: '-1px',
                                transform: 'translateX(-50%)',
                            }}
                        ></div>
                    </div>
                    <Col>
                        <div className="d-flex justify-content-between flex-wrap">
                            {['2009', '2012', '2012', '2012', '2012'].map((year, index) => (
                                <div key={index} className="text-center mb-3" style={{ flex: '1 0 20%', minWidth: '60px' }}>
                                    <h2 className={`mb-0 ${index === 2 ? 'fs-1' : 'fs-2'}`}
                                        style={{
                                            color: index === 2 ? '#a98b4f' : '#ffffff80',
                                            transform: index === 2 ? 'scale(1.2)' : 'scale(1)',
                                            transformOrigin: 'center bottom',
                                            fontFamily: 'var(--font-dm-serif-text)',
                                            fontSize: '3rem',
                                        }}
                                    >
                                        {year}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default InnovatingSection;

// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import Image from 'next/image';
// import SectionHeadingSmall from './section-heading-small';
// import SectionHeading from './section-heading';

// const InnovatingSection = () => {
//     return (
//         <div className="position-relative" style={{ height: '100vh', minHeight: '600px' }}>
//             {/* Background Image */}
//             <Image
//                 src="/automotive-bg.png"
//                 alt="Background"
//                 layout="fill"
//                 objectFit="cover"
//                 quality={100}
//                 priority
//                 style={{
//                     zIndex: -10
//                 }}
//             />

//             {/* Overlay */}
//             <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.5, zIndex: -5, backgroundColor: 'rgba(0, 0, 0, 1)' }}></div>

//             {/* Content */}
//             <Container className="h-100 d-flex flex-column justify-content-between border border-danger" style={{ zIndex: 20 }}>
//                 <Row className="mt-5">
//                     <Col>
//                         <SectionHeadingSmall text="Innovating in the" className="text-capitalize" />
//                         <SectionHeading text="Lorem ipsum dolor" className="text-capitalize text-white" />
//                     </Col>
//                 </Row>

//                 <Row className="mb-5">
//                     <div md={6} className='border border-danger text-center mx-auto' style={{ maxWidth: '600px' }}>
//                         <SectionHeading text="Lorem ipsum dolor" className="text-capitalize text-white" />
//                         <p className="text-white" style={{marginTop: '-15px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae quam rutrum</p>
//                     </div>
//                 </Row>
//                 <Row className="mb-5">
//                     <div className="w-100 position-relative mb-3 rounded-2" style={{ height: '2px', background: '#ffffff80' }}>
//                         <div className="bg-white position-absolute top-0 start-50 translate-middle-x rounded-3" style={{ height: '3px', width: '20%' }}></div>
//                     </div>
//                     <Col className="d-flex justify-content-between">
//                         {['2009', '2012', '2012', '2012', '2012'].map((year, index) => (
//                             <h2 key={index} className='fs-1'
//                                 style={{
//                                     color: index === 2 ? '#a98b4f' : '#ffffff80',
//                                     scale: index === 2 ? '1.5' : '1'
//                                 }}
//                             >
//                                 {year}
//                             </h2>
//                         ))}
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// }

// export default InnovatingSection