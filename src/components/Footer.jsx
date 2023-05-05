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
                    <Col>
                        <img src={logo} alt="Logo" width="200" />
                    </Col>
                    <Col>
                        <p className='mb-4 fs-5 fw-bold'>About</p>
                        <p>Home</p>
                        <p>Projects</p>
                        <p>Resume</p>
                        <p>Skills</p>
                        <p>Certifications</p>
                    </Col>
                    <Col>
                        <p className='mb-4 fs-5 fw-bold'>Projects</p>
                        <p>Adobe Cloned Responsive Website</p>
                        <p>Joiner's Portal</p>
                        <p>Skill Amplifire</p>
                        <p>One More</p>
                    </Col>
                    <Col>
                        <p className='mb-4 fs-5 fw-bold'>Socials</p>
                        <p className='display-5'>
                            <Stack direction="horizontal" gap={3}>
                                <i class="bi bi-facebook" style={{ color: '#1877f2' }}></i>
                                <i class="bi bi-github"></i>
                                <i class="bi bi-linkedin" style={{ color: '#0A66C2' }}></i>
                            </Stack>
                        </p>
                    </Col>
                </Row>
                <div className='pt-1' style={{ borderTop: '1px solid #ccc' }}>
                    <Stack direction="horizontal" gap={3}>
                        <p>&copy; 2023 Janela Daculong Portfolio Website. All rights reserved.</p>
                    </Stack>
                </div>
            </Container>
        </div>
    )
}

export default Footer