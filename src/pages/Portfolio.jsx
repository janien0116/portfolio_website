import React from 'react'
import { Container, Row, Col, Image, Stack, Card } from 'react-bootstrap'
import profilePic from '../assets/janela.png'
import skillAmplifire from '../assets/projects-images/skill_amplifire_home.png'
import teacherPortal from '../assets/projects-images/teacher_dashboard.png'
import joinersPortal from '../assets/projects-images/joinersportal_home.png'
import jpDestination from '../assets/projects-images/joinersportal_destination.png'
import adobeClone from '../assets/projects-images/adobe_cloned.png'
import certificateOne from '../assets/certificates/certificate-of-completion-for-javascript-basics.pdf'
import certificateTwo from '../assets/certificates/certificate-of-completion-for-object-oriented-programming-in-javascript.pdf'
import certificateThree from '../assets/certificates/SoloLearn_JSIntermediate_Certificate.pdf'
import certificateFour from '../assets/certificates/fcc_JavaScript_Certificate.pdf'

const Portfolio = () => {
    return (
        <div>
            <Container className='py-5'>
                <h1 className='fw-bold text-white text-center mb-5'>My Projects</h1>
                <Stack direction='vertical' gap={5}>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={3}>
                            <Image fluid src={profilePic} alt='Applicant' roundedCircle thumbnail/>
                        </Col>
                        <Col lg={8}>
                            <p className='text-white fs-5'>Welcome to my portfolio! As an aspiring web developer, I'm excited to present the projects I have developed during my time at Kodego PH bootcamp. These projects reflect my dedication to learning and showcase my skills in web development. Please take a moment to explore and discover the variety of technologies and techniques I have employed to bring these projects to life.</p>
                        </Col>
                    </Row>
                    <Container className='mb-5'></Container>
                    <Row className='align-items-center position-relative'>
                        <Card className='glass px-3 py-4' style={{ marginLeft: "18%" }}>
                            <h1>Skill Amplifire</h1>
                            <p>Front End: ReactJS with react-bootstrap, axios, react-chartjs-2</p>
                            <p>Back End: ExpressJS with mongoose, jwt, multer</p>
                            <p>Database: MongoDB</p>
                            <p>As my Capstone project in KodegoPH, I designed and developed Skill Amplifire, an academy website that features auto-generated courses based on selected curriculum with the ability to filter by average ratings. The website also includes instructor analytics using Chart.js2 library and customizable courses for students who prefer not to use the auto-generated courses. Skill Amplifire is built with MongoDB as the database and ExpressJS as the API maker.</p>
                            <Stack direction='horizontal' gap={5}>
                                <p className='fs-4'><i class="bi bi-cast"></i> <a href='https://skill-amplifire.vercel.app/' target='_blank' className='text-dark'>Live Demo</a></p>
                                <p className='fs-4'><i class="bi bi-github"></i> <a href='https://github.com/janien0116/skill_amplifire_api.git' target='_blank' className='text-dark'>GitHub Repository</a></p>
                            </Stack>
                        </Card>
                        <Image fluid src={skillAmplifire} rounded alt='Skill Amplifire Website Screenshot' id='sa-img1' />
                        <Image fluid src={teacherPortal} rounded alt='Skill Amplifire Analytics Screenshot' id='sa-img2' />
                    </Row>
                    <Container className='mb-5'></Container>
                    <Row className='align-items-center position-relative'>
                        <Card className='glass px-3 py-4' style={{ marginLeft: "35%" }}>
                            <h1>Joiner's Portal</h1>
                            <p>Front End: Laravel Blade (PHP templating engine), CSS, and JavaScript</p>
                            <p>Back End: PHP (Laravel framework)</p>
                            <p>Database: MySQL</p>
                            <p>Joiner's Portal is a collaborative project that I developed with my four classmates, where my contribution accounted for over 90% of the work. Built using Laravel and MySQL, the portal offers a seamless booking experience for local tourist spots in the Philippines. It incorporates a user-friendly interface with features such as a Google Maps Street View toggle, powered by the Google Maps JavaScript API, allowing users to explore specific tourist spots. Additionally, users can conveniently manage their bookings, including viewing, updating, and deleting them, through the tour history page.</p>
                            <Stack direction='horizontal' gap={5}>
                                <p className='fs-4'><i class="bi bi-cast"></i> <a href='#' className='text-dark'>Live Demo</a></p>
                                <p className='fs-4'><i class="bi bi-github"></i> <a href='https://github.com/janien0116/miniproject2_joiners_portal.git' target='_blank' className='text-dark'>GitHub Repository</a></p>
                            </Stack>
                        </Card>
                        <Image fluid src={joinersPortal} rounded alt='Joiners Portal Screenshot' id='jp-img1' />
                        <Image fluid src={jpDestination} rounded alt='Joiners Portal Destination Screenshot' id='jp-img2' />
                    </Row>
                    <Container className='mb-5'></Container>
                    <Row className='align-items-center position-relative' style={{ marginLeft: "5%" }}>
                        <Card className='glass px-3 py-4'>
                            <h1>Adobe PH Cloned Webpage</h1>
                            <p>Front End: HTML, CSS, Bootstrap and JavaScript</p>
                            <p>My first project submitted to KodegoPH Bootcamp was a cloned Adobe homepage, which I selected because it presented an opportunity to showcase my front-end development skills. I paid close attention to details such as element placement, animations and responsiveness across different screen sizes, and utilized customized Bootstrap and added CSS to recreate the page to the best of my knowledge.</p>
                            <Stack direction='horizontal' gap={5}>
                                <p className='fs-4'><i class="bi bi-cast"></i> <a href='https://myclonedwebsite-adobe.vercel.app' target='_blank' className='text-dark'>Live Demo</a></p>
                                <p className='fs-4'><i class="bi bi-github"></i> <a href='https://github.com/janien0116/myclonedwebsite_adobe.git' target='_blank' className='text-dark'>GitHub Repository</a></p>
                            </Stack>
                        </Card>
                        <Image fluid src={adobeClone} rounded alt='Adobe Cloned Webpage Screenshot' id='ac-img' />
                    </Row>
                    <h1 className='fw-bold text-white text-center my-5'>My Certifications</h1>
                    <Container>
                        <Row>
                            <Col>
                                <embed src={`${certificateOne}#toolbar=0&view=fitH`} type="application/pdf" height={'201'} fluid />
                                <p><a href={certificateOne} className='text-primary' download><i class="bi bi-download"></i> Download PDF</a></p>
                            </Col>
                            <Col>
                                <embed src={`${certificateTwo}#toolbar=0&view=fitH`} type="application/pdf" height={'201'} fluid />
                                <p><a href={certificateTwo} className='text-primary' download><i class="bi bi-download"></i> Download PDF</a></p>
                            </Col>
                            <Col>
                                <embed src={`${certificateThree}#toolbar=0&view=fitH`} type="application/pdf" height={'201'} fluid />
                                <p><a href={certificateThree} className='text-primary' download><i class="bi bi-download"></i> Download PDF</a></p>
                            </Col>
                            <Col>
                                <embed src={`${certificateFour}#toolbar=0&view=fitH`} type="application/pdf" height={'225'} fluid />
                                <p><a href={certificateFour} className='text-primary' download><i class="bi bi-download"></i> Download PDF</a></p>
                            </Col>
                        </Row>
                    </Container>
                </Stack>
            </Container>
        </div>
    )
}

export default Portfolio