import React, { useEffect, useRef, useState } from 'react'
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
// import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../assets/Daculong_Janela_Resume.pdf'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`;

const Resume = () => {
  const newplugin = defaultLayoutPlugin();
  return (
    <div>
      <Container className='py-5'>
        <h1 className='fw-bold text-white text-center mb-5'>My Resume</h1>
        <Container fluid className='w-75'>
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js`}>
            <Viewer fileUrl={resume} plugins={[newplugin]} />
          </Worker>
        </Container>
        <h1 className='fw-bold text-white text-center my-5'>Contact Me</h1>
        <Container className='glass2 mb-5'>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="John Doe" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={6} />
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