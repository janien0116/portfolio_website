import React from 'react'
import { Container, Row, Col, Image, Stack } from 'react-bootstrap'
import skillAmplifire from '../assets/projects-images/skill_amplifire_home.png'
import joinersPortal from '../assets/projects-images/JoinersPortal.mp4'
import adobeClone from '../assets/projects-images/adobe_cloned.png'

const Portfolio = () => {
    return (
        <div>
            <Container className='py-5'>
                <h1 className='fw-bold text-white text-center my-5'>My Projects</h1>
                <Stack direction='vertical' gap={5}>
                    <Row>
                        <Col>
                            <Image fluid src={skillAmplifire} />
                        </Col>
                        <Col>
                        <p>Welcome to my portfolio! As an aspiring web developer, I'm excited to present the projects I have developed during my time at Kodego PH bootcamp. These projects reflect my dedication to learning and showcase my skills in web development. Please take a moment to explore and discover the variety of technologies and techniques I have employed to bring these projects to life.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Skill Amplifire</h1>
                            <p>Front End: ReactJS with React Bootstrap</p>
                            <p>Back End: ExpressJS</p>
                            <p>Database: MongoDB</p>
                            <p>As my Capstone project in KodegoPH, I designed and developed Skill Amplifire, an academy website that features auto-generated courses based on selected curriculum with the ability to filter by average ratings. The website also includes instructor analytics using Chart.js2 library and customizable courses for students who prefer not to use the auto-generated courses. Skill Amplifire is built with MongoDB as the database and ExpressJS as the API maker.</p>
                            <Stack direction='horizontal' gap={5}>
                                <p className='fs-4'><i class="bi bi-cast"></i> <a href='#' className='text-dark'>Live Demo</a></p>
                                <p className='fs-4'><i class="bi bi-github"></i> <a href='#' className='text-dark'>GitHub Repository</a></p>
                            </Stack>
                        </Col>
                        <Col>
                            <Image fluid src={skillAmplifire} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Joiner's Portal</h1>
                            <p>Front End: Laravel Blade (PHP templating engine), CSS, and JavaScript</p>
                            <p>Back End: PHP (Laravel framework)</p>
                            <p>Database: MySQL</p>
                            <p>Joiner's Portal is a collaborative project that I developed with my four classmates, where my contribution accounted for over 90% of the work. Built using Laravel and MySQL, the portal offers a seamless booking experience for local tourist spots in the Philippines. It incorporates a user-friendly interface with features such as a Google Maps Street View toggle, powered by the Google Maps JavaScript API, allowing users to explore specific tourist spots. Additionally, users can conveniently manage their bookings, including viewing, updating, and deleting them, through the tour history page.</p>
                            <Stack direction='horizontal' gap={5}>
                                <p className='fs-4'><i class="bi bi-cast"></i> <a href='#' className='text-dark'>Live Demo</a></p>
                                <p className='fs-4'><i class="bi bi-github"></i> <a href='#' className='text-dark'>GitHub Repository</a></p>
                            </Stack>
                        </Col>
                        <Col>
                            <video width="100%" controls muted autoplay>
                                <source src={joinersPortal} type="video/mp4" />
                            </video>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Adobe PH Cloned Webpage</h1>
                            <p>Front End: HTML, CSS, Bootstrap and JavaScript</p>
                            <p>My first project submitted to KodegoPH Bootcamp was a cloned Adobe homepage, which I selected because it presented an opportunity to showcase my front-end development skills. I paid close attention to details such as element placement, animations and responsiveness across different screen sizes, and utilized customized Bootstrap and added CSS to recreate the page to the best of my knowledge.</p>
                            <Stack direction='horizontal' gap={5}>
                                <p className='fs-4'><i class="bi bi-cast"></i> <a href='#' className='text-dark'>Live Demo</a></p>
                                <p className='fs-4'><i class="bi bi-github"></i> <a href='#' className='text-dark'>GitHub Repository</a></p>
                            </Stack>
                        </Col>
                        <Col>
                            <Image fluid src={adobeClone} />
                        </Col>
                    </Row>
                </Stack>
            </Container>
        </div>
    )
}

export default Portfolio