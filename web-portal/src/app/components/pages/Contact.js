import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faMobile,faPhone } from '@fortawesome/free-solid-svg-icons';
import { ContactService } from '../../services/contact.service';

const ContactPage = () => {
  const [contactData, setContactData] = React.useState({
    name: '',
    mobileNo: '',
    telephoneNo: '',
    email: '',
    address: '',
    streetAddress: '',
  });

  const contactService = new ContactService();

  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    await contactService.getContact()
    .then(response=>{
      setContactData(response.data[0]);
  
    })
    .catch(err=>{
     console.log(err);
    })
  };
  return (
    <div className="container-fluid py-5">
      <Container className="py-5">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="display-6 mb-3">Have Any Query? Feel Free To Contact Us</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget,
            ultrices pulvinar tortor.
          </p>
        </div>
        <Row className="contact-info position-relative g-0 mb-5 rounded-2" style={{backgroundColor:'#207daf'}}>
          <Col lg={6}>
            <a href="tel:+0123456789" className="d-flex justify-content-lg-center p-4">
              <div className="icon-box-light flex-shrink-0">
              <FontAwesomeIcon icon={faMobile} />
              </div>
              <div className="ms-3">
                <h5 className="text-white">Call Us</h5>
                <h2 className="text-white mb-0">{contactData.mobileNo}</h2>
              </div>
            </a>
          </Col>
          <Col lg={6}>
            <a href="mailto:info@example.com" className="d-flex justify-content-lg-center  p-4">
              <div className="icon-box-light flex-shrink-0">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="ms-3">
                <h5 className="text-white">Mail Us</h5>
                <h2 className="text-white mb-0">{contactData.email}</h2>
              </div>
            </a>
          </Col>
        </Row>
        <Row className="g-5">
          <Col lg={6} className="wow fadeInUp" data-wow-delay="0.1s">
            <p className="mb-4">
              The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few
              minutes. Just copy and paste the files, add a little code and you're done.{' '}
              <a href="https://htmlcodex.com/contact-form">Download Now</a>.
            </p>
            <Form>
              <Row className="g-3">
                <Col md={6}>
                  <Form.Group controlId="name">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" placeholder="Your Email" />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Leave a message here" />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Button variant="primary" type="submit">
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col lg={6} className="wow fadeInUp" data-wow-delay="0.5s">
            <iframe
              className="w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d38.7445!3d9.0084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16408c8f9db4d3bf%3A0x2c55e2c5e7b1b6ee!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
             frameBorder="0" style={{ minHeight: '300px', border: '0' }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;