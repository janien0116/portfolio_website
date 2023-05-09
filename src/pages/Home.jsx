import React from 'react'
import { Container, Row, Col, Image, Stack, Button, Figure, ProgressBar } from 'react-bootstrap'
import book1 from '../assets/bookcovers/1.png'
import book2 from '../assets/bookcovers/2.png'
import book3 from '../assets/bookcovers/3.png'
import book4 from '../assets/bookcovers/4.png'
import imagePlaceholder from '../assets/logo-symbol.png'
import instructorHolder from '../assets/KodeGo_logo.png'

const Home = () => {

    return (
        <Stack direction='vertical' gap={5}>
            <Container className='my-5'>
                <Stack direction='horizontal' gap={2}>
                    <Col xs={6}>
                        <Row>
                            <Image src={book1} fluid alt='Project1' className='project' />
                            <Image src={book2} fluid alt='Project2' className='project' />
                        </Row>
                        <Row>
                            <Image src={book3} fluid alt='Project3' className='project' />
                            <Image src={book4} fluid alt='Project4' className='project' />
                        </Row>
                    </Col>
                    <Col xs={6}>
                        <h1 className="display-5 fw-bold lh-base text-white">Building the web, one pixel at a time. Hi there,
                            I'm
                            Janela!</h1>
                        <p className='text-white fs-5'>Hello and welcome! My name is Janela Daculong,
                            and I'm a self-studied web developer with a strong foundation in full stack web development.
                            With a passion for creating beautiful and functional websites, I've worked on several
                            projects to showcase my skills and abilities. Take a look at my portfolio to see some of my
                            best work and learn more about my skills and experience. Thank you for visiting!</p>
                        <Button variant='secondary' className='rounded-pill px-5 fs-5 fw-bold border'>View Portfolio</Button>
                    </Col>
                </Stack>
            </Container>
            <Container className='my-5 fs-5'>
                <h1 className='text-center display-5 fw-bold lh-base text-white'>My Featured Project</h1>
                <Row className='my-5 text-white'>
                    <Col className='me-5 mb-3'>
                        <h1>Skill Amplifire<i className="bi bi-fire text-dark"></i></h1>
                        <ul>
                            <li className='mb-3'>Used Bootstrap, ReactJS, ExpressJS, MongoDB and Vercel in developing the project.</li>
                            <li className='mb-3'>An interactive and user-friendly academy website catering to students and instructors.</li>
                            <li className='mb-3'>Received a glowing feedback of "super above and beyond" from our instructor and awarded as Best Capstone Project.</li>
                        </ul>
                        <div  className='d-flex justify-content-center'>
                            <Button variant='dark' className='rounded-pill px-5 fs-5 fw-bold border'>View Live Demo</Button>
                        </div>
                    </Col>
                    <Col>
                        <Image src={imagePlaceholder} fluid rounded className='mb-5' />
                    </Col>
                </Row>
            </Container>
            <Container className='fs-5 my-5'>
                <h1 className='text-center display-5 fw-bold lh-base text-white mb-5'>What my instructor is saying about me</h1>
                <Stack direction='horizontal' gap={5}>
                    <Col lg={4}>
                        <Image src={instructorHolder} alt='Instructor' fluid roundedCircle/>
                    </Col>
                    <Col lg={8}>
                        <Figure>
                            <blockquote className="blockquote">
                                <p className='fs-6 text-white'>"Her color selection skills are impressive. It is quite rare to find a developer who is proficient in both front-end and back-end development. I believe her skill level is comparable to software developers who are creating websites. Her capstone project is not just for show, as the website is truly functional. The capstone involved a lot of critical thinking, from design to flow and then to the back-end development. She encapsulated all these aspects in her capstone. If other students went above and beyond, she went super above and beyond. It is clear that she enjoys designing websites and creating applications, as it is likely a hobby for her. If this were a technical interview or if I were her employer, I would hire her immediately. Essentially, she is having fun and is like a kid in a candy store. She possesses a skill that allows her to discover everything when a door is opened."</p>
                            </blockquote>
                            <Figure.Caption className="blockquote-footer fs-4 text-white">
                                Davy Yabut <cite title="Source Title">KodeGo Teacher</cite>
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Stack>
            </Container>
            <Container className='text-center my-5'>
                <h1 className='display-5 fw-bold my-5'>Get to know about me more!</h1>
                <Button variant='dark' className='rounded-pill px-5 pt-2 pb-3 fs-4 fw-bold border mb-5'>Download Resume</Button>
            </Container>
            <Container className='filler'></Container>
        </Stack>
    )
}

export default Home