import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Stack } from 'react-bootstrap';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div id='footer'>
            <Container>
                <Row className='pt-5'>
                    <Col lg={3} className='d-none d-sm-block'>
                        <img src={logo} alt="Logo" width="200" />
                    </Col>
                    <Col lg={3}>
                        <p className='mb-4 fs-5 fw-bold text-gray'>About</p>
                        <p><a href='/portfolio' className='text-light text-decoration-none'>Projects</a></p>
                        <p><a href='/resume' className='text-light text-decoration-none'>Resume</a></p>
                        <p><a href='/' className='text-light text-decoration-none'>Skills</a></p>
                        <p><a href='/portfolio' className='text-light text-decoration-none'>Certifications</a></p>
                    </Col>
                    <Col lg={3}>
                        <p className='mb-4 fs-5 fw-bold text-gray'>Projects</p>
                        <p><a href='https://myclonedwebsite-adobe.vercel.app/' target='_blank' className='text-light text-decoration-none'>Adobe Cloned Responsive Website</a></p>
                        <p><a href='https://github.com/janien0116/miniproject2_joiners_portal.git' target='_blank' className='text-light text-decoration-none'>Joiner's Portal</a></p>
                        <p><a href='https://skill-amplifire.vercel.app/' target='_blank' className='text-light text-decoration-none'>Skill Amplifire</a></p>
                        <p><a href='/' className='text-light text-decoration-none'>One More</a></p>
                    </Col>
                    <Col lg={3}>
                        <p className='mb-4 fs-5 fw-bold text-gray'>Socials</p>
                        <p className='display-5'>
                            <Stack direction="horizontal" gap={3}>
                                <a href='https://github.com/janien0116' target='_blank' className='text-black'><i className="bi bi-github"></i></a>
                                <a href='https://www.linkedin.com/in/janela-daculong-4b58a3275/' target='_blank' className='text-dark-blue'><i className="bi bi-linkedin"></i></a>
                                <a href='https://www.facebook.com/daculongj/' target='_blank' className='text-blue'><i class="bi bi-facebook"></i></a>
                            </Stack>
                        </p>
                    </Col>
                </Row>
                <div className='pt-1' style={{ borderTop: '1px solid #ccc' }}>
                    <Stack direction="horizontal" gap={3}>
                        <p className='text-gray'>&copy; 2023 Janela Daculong Portfolio Website</p>
                    </Stack>
                </div>
            </Container>
        </div>
    )
}

export default Footer