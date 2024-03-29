import React from 'react'
import { Container, Row, Col, Image, Stack, Button, Figure } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero-image.png'
import imagePlaceholder from '../assets/logo-symbol.png'
import instructorHolder from '../assets/KodeGo_logo.png'
import resume from '../assets/Daculong_Janela_Resume.pdf'
import Marquee from 'react-fast-marquee'

const Home = () => {

    const handleClick = () => window.scrollTo(0, 0);

    return (
        <Stack direction='vertical' gap={5} id='home-component'>
            <Container fluid className='my-5 px-2' id='home'>
                <Row className='position-relative' id='hero'>
                    <Col lg={7} className='hero-image'>
                        <Image src={heroImage} fluid alt='Hero' />
                        <p className='hero-links' id='skill-ampli'><a href='https://skill-amplifire.vercel.app/' target="_blank" rel="noreferrer">Skill Amplifire</a></p>
                        <p className='hero-links text-center' id='joiners-port'><a href='http://54.169.237.195/' target="_blank" rel="noreferrer">Joiner's <br />Portal</a></p>
                        <p className='hero-links text-center' id='adobe-clone'><a href='https://myclonedwebsite-adobe.vercel.app/' target="_blank" rel="noreferrer">Adobe<br />(Clone)</a></p>
                    </Col>
                    <Col lg={5}>
                        <Container fluid id='hero-text-div'>
                            <h1 className="hero-header display-5">Building the web, </h1>
                            <h1 className="hero-header2 display-5">One pixel at a time.</h1>
                            <h1 className="hero-header3 display-5">Hi there, I'm Janela!</h1>
                        </Container>
                        <p className='hero-text text-dark fs-5'>Hello and welcome! My name is Janela Daculong,
                            and I'm a self-directed Full-Stack Web Developer with a strong foundation in web development tools and frameworks.
                            With a passion for creating beautiful and functional websites, I've worked on several
                            projects to showcase my skills and abilities. Take a look at my portfolio to see some of my
                            best work and learn more about my skills and experience. Thank you for visiting!</p>
                        <Stack direction='vertical' className='align-items-center justify-content-center'>
                            <Link to={'/portfolio'}>
                                <Button variant='secondary' className='rounded-pill px-5 fs-5 fw-bold border border-dark' onClick={handleClick}>View Portfolio</Button>
                            </Link>
                            <p className='fs-2'>
                                <Stack direction="horizontal" gap={3}>
                                    <a href='https://github.com/janien0116' target='_blank' rel="noreferrer" className='text-black'><i className="bi bi-github"></i></a>
                                    <a href='https://www.linkedin.com/in/janela-daculong-4b58a3275/' target='_blank' rel="noreferrer" className='text-dark'><i className="bi bi-linkedin"></i></a>
                                </Stack>
                            </p>
                        </Stack>
                    </Col>
                </Row>
            </Container>
            <Container className='my-5 fs-5'>
                <h1 className='text-center display-5 fw-bold lh-base text-white'>My Featured Project</h1>
                <Row className='my-5 text-white'>
                    <Col md={{ span: 6, order: 'first' }} xs={{ order: 'last' }} className='mb-3'>
                        <h1>Skill Amplifire<i className="bi bi-fire text-dark"></i></h1>
                        <ul>
                            <li className='mb-3'>Used Bootstrap, ReactJS, ExpressJS, MongoDB and Vercel in developing the project.</li>
                            <li className='mb-3'>An interactive and user-friendly academy website catering to students and instructors.</li>
                            <li className='mb-3'>Received a glowing feedback of "super above and beyond" from our instructor and awarded as Best Capstone Project.</li>
                        </ul>
                        <div className='d-flex justify-content-center'>
                            <Link to={`https://skill-amplifire.vercel.app/`} target="_blank" rel="noreferrer">
                                <Button variant='dark' className='rounded-pill px-5 fs-5 fw-bold border'>View Live Demo</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col md={{ span: 6, order: 'first' }} xs={{ order: 'first' }}>
                        <Image src={imagePlaceholder} fluid rounded className='mb-5' />
                    </Col>
                </Row>
            </Container>
            <Container className='fs-5 my-5'>
                <h1 className='text-center display-5 fw-bold lh-base text-white mb-5'>What my instructor is saying about me</h1>
                <Row className='align-items-center'>
                    <Col lg={4} className='text-center d-none d-sm-block'>
                        <Image src={instructorHolder} alt='Instructor' id='instructor-img' fluid roundedCircle />
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
                </Row>
            </Container>
            <Container className='text-center my-5'>
                <h1 className='display-5 fw-bold my-5'>Get to know about me more!</h1>
                <a href={resume} download>
                    <Button variant='dark' className='rounded-pill px-5 pt-2 pb-3 fs-4 fw-bold border mb-5'><i class="bi bi-download"></i> Download Resume</Button>
                </a>
            </Container>
            <h1 className='display-5 fw-bold my-5 text-center text-white'>My Tech Stack</h1>
            <Marquee className='mb-5'>
                <Stack direction='horizontal' gap={5}>
                    <Image src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' width={100}/>
                    <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png' width={100}/>
                    <Image src='https://img.freepik.com/free-icon/css_318-698167.jpg' width={100}/>
                    <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/1280px-Webysther_20160423_-_Elephpant.svg.png' width={120}/>
                    <Image src='https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png' width={150}/>
                    <Image src='https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp' width={100}/>
                    <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Logo.min.svg/2560px-Logo.min.svg.png' width={230}/>
                    <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png' width={150}/>
                    <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/JQuery-Logo.svg/2560px-JQuery-Logo.svg.png' width={180}/>

                </Stack>
            </Marquee>
        </Stack>
    )
}

export default Home