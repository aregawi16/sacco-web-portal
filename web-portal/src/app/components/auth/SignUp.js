import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar, Nav, Card, Button, Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faUserPlus } from '@fortawesome/free-solid-svg-icons';
const SignupPage = () => {
  const [showSignupCard, setShowSignupCard] = useState(true);

  const handleSignupClose = () => {
    setShowSignupCard(false);
  };

  const handleSignupShow = () => {
    setShowSignupCard(true);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic
    // ...
    handleSignupClose();
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={5}>
          <Card show={showSignupCard} onHide={handleSignupClose}>
            <Card.Header closeButton>
              <Card.Title>Sign Up</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSignupSubmit}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" required />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" required />
                </Form.Group>
                <Button variant="primary" type="submit" className="my-2">
      <FontAwesomeIcon icon={faUserPlus} className="mx-2" />
      SgnUp
    </Button>
              </Form>
              <p>Back to login <a href="/login">Login</a></p>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;