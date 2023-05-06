import React from 'react'
import { Container, Row, Col, Image, Stack, Button, Figure, ProgressBar } from 'react-bootstrap'
import book1 from '../assets/bookcovers/1.png'
import book2 from '../assets/bookcovers/2.png'
import book3 from '../assets/bookcovers/3.png'
import book4 from '../assets/bookcovers/4.png'
import imagePlaceholder from '../assets/logo-symbol.png'

const Home = () => {

    return (
        <Container>
            <Stack direction='horizontal' gap={2} className='my-5'>
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
                    <Button variant='primary' className='rounded-pill px-5 fs-5 fw-bold border'>View Portfolio</Button>
                </Col>
            </Stack>
            <Container fluid className='my-5 fs-5'>
                <h1 className='text-center display-5 fw-bold lh-base text-white'>My Featured Project</h1>
                <Row className='mt-5'>
                    <Col>
                        <h1>Skill Amplifire</h1>
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eveniet.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eveniet.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eveniet.</li>
                        </ul>
                        <Button>View Project</Button>
                    </Col>
                    <Col>
                        <Image src={imagePlaceholder} fluid rounded />
                    </Col>
                </Row>
            </Container>
            <Container className='fs-5 my-5'>
                <h1 className='text-center display-5 fw-bold lh-base text-white mb-5'>What my instructor is saying about me</h1>
                <Stack direction='horizontal' gap={5}>
                    <Col>
                        <Image src={imagePlaceholder} alt='Instructor' fluid />
                    </Col>
                    <Col>
                        <Figure>
                            <blockquote className="blockquote">
                                <p>"I've always wanted to pursue a career in web development but didn't know where to start. Skill Amplifire has been a game-changer for me. The curriculum was well-organized, the instructors were knowledgeable, and the community was supportive. Thanks to Skill Amplifier, I landed my first freelance project and I'm now on my way to building a successful career in web development."</p>
                            </blockquote>
                            <Figure.Caption className="blockquote-footer fs-4 text-black">
                                Davy Yabut <cite title="Source Title">Kodego Ph Teacher</cite>
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Stack>
            </Container>
            <Container className='text-center my-5'>
                <h1 className='display-5 fw-bold mb-5'>Get to know about me more!</h1>
                <Button className='mb-5'>Download CV</Button>
            </Container>
            <Container className='my-5 text-center w-50'>
                <h1 className='display-5 fw-bold mb-5'>My Expertise</h1>
                <h3>HTML and CSS</h3>
                <ProgressBar variant='success' striped now={90} label={"90%"} />
                <h3 className='mt-4'>Bootstrap</h3>
                <ProgressBar variant='success' striped now={90} label={"90%"} />
                <h3 className='mt-4'>JavaScript</h3>
                <ProgressBar variant='success' striped now={80} label={"80%"} />
                <h3 className='mt-4'>PHP</h3>
                <ProgressBar variant='success' striped now={70} label={"70%"} />
                <h3 className='mt-4'>Laravel</h3>
                <ProgressBar variant='success' striped now={70} label={"70%"} />
                <h3 className='mt-4'>ReactJS</h3>
                <ProgressBar variant='success' striped now={70} label={"70%"} />
                <h3 className='mt-4'>MySQL</h3>
                <ProgressBar variant='success' striped now={60} label={"60%"} />
                <h3 className='mt-4'>MongoDB</h3>
                <ProgressBar variant='success' striped now={60} label={"60%"} />
            </Container>
        </Container>
    )
}

export default Home