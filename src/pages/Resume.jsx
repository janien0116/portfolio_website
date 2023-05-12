import React, { useEffect, useRef, useState } from 'react'
import resume from '../assets/Daculong_Janela_Resume.pdf'
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import emailjs from '@emailjs/browser';

const Resume = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isEmailNotSent, setIsEmailNotSent] = useState(false);
  const newplugin = defaultLayoutPlugin();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setIsEmailSent(true);
      }, (error) => {
        console.log(error.text);
        setIsEmailNotSent(true);
      });
  };
  return (
    <div>
      <Container className='py-5'>
        <h1 className='fw-bold text-white text-center mb-5'>My Resume</h1>
        <Container fluid className='w-75' id='resume-pdf'>
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js`}>
            <Viewer fileUrl={resume} plugins={[newplugin]} />
          </Worker>
        </Container>
        <h1 className='fw-bold text-white text-center mt-5 mb-3'>Contact Me</h1>
        <p className='text-center fs-6 text-white'>Get in touch with me to discuss how I can bring my web development skills and enthusiasm to your team.</p>
        <Stack direction='horizontal' gap={5} className='justify-content-center fs-6' id='contact-streams'>
          <p><i class="bi bi-envelope-at"></i> daculongjanela31@gmail.com</p>
          <p><i className="bi bi-linkedin"></i> Janela Daculong</p>
          <p><i class="bi bi-messenger"></i> Janela Daculong</p>
        </Stack>
        <p className='fw-bold fs-5 text-white text-center mt-4'>Send me an email</p>
        {isEmailSent && (
          <Container className='email-notif fs-5' id='success'>
            <p className='mb-0'>Email sent successfully<i className="bi bi-check-lg fs-5" style={{ color: "green" }}></i></p>
          </Container>
        )}
        {isEmailNotSent && (
          <Container className='email-notif fs-5' id='not-sent'>
            <p className='mb-0'>Email not sent<i className="bi bi-x fs-4" style={{ color: "red" }}></i></p>
          </Container>
        )}
        <Container className='glass2 mb-5'>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="John Doe" name="user_name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" name="user_email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={6} name="message" />
            </Form.Group>
            <div className='text-center'>
              <Button type='submit' className='px-5 rounded-pill fs-5 border border-2'>Send</Button>
            </div>
          </Form>
        </Container>
      </Container>
    </div>
  )
}

export default Resume