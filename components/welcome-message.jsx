import React from 'react'
import SectionHeading from './section-heading'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'

const WelcomeMessage = () => {
    return (
        <section
            style={{
                background: '#c29d55',
            }}
            className='py-5 py-lg-5'
        >
            <Container>
                <Row>
                    <Col xs={12} lg={8}>
                        <div>
                            <SectionHeading text="Welcome Message" style={{ color: '#0c2646' }} />
                            <p className='responsive-paragraph'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae quam rutrum, tristique massa at, eleifend dui. Aliquam erat volutpat. Aliquam id sodales turpis, in congue ex. In in tortor eros. Vivamus libero purus, scelerisque sit amet odio non, dignissim placerat metus. Donec laoreet luctus condimentum. Pellentesque id pretium nulla, elementum dapibus lectus. Vivamus et nulla consectetur, vehicula massa ac, pellentesque sem. Cras eget massa sem. Maecenas non euismod libero, in aliquet purus. Quisque id dignissim eros. Maecenas rhoncus facilisis volutpat. Sed eget turpis vulputate, egestas purus id, cursus urna.
                                <br />
                                <br />
                                Aliquam erat volutpat. Nullam luctus facilisis purus, ac aliquam erat sollicitudin sed. Curabitur aliquet tortor mi, vel vehicula massa posuere ut. Fusce lorem erat, laoreet non enim vitae, sodales scelerisque ipsum. Sed blandit arcu lobortis augue venenatis rhoncus. Cras velit velit, bibendum nec magna ut, tristique cursus nisl. Nam facilisis egestas ornare. Pellentesque eu interdum leo. Nam id eleifend quam, ut posuere nulla. Donec varius, purus non lobortis facilisis, erat metus eleifend tellus, dignissim lobortis quam lectus a lorem.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} lg={4} className="d-flex justify-content-center align-items-center">
                        <img
                            src={`/welcome-image.png`}
                            alt='welcome-image'
                            className='w-100 object-fit-cover'
                            style={{ height: 'auto', maxHeight: '500px', maxWidth: '400px' }}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WelcomeMessage