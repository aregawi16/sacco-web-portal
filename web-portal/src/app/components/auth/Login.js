import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Container, Navbar, Nav, Card, Button, Form, Row, Col } from 'react-bootstrap';

const LoginPage = ({ handleLogin }) => {
  const [showLoginCard, setShowLoginCard] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClose = () => {
    setShowLoginCard(false);
  };

  const handleLoginShow = () => {
    setShowLoginCard(true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Pass the login credentials to the parent component
    handleLogin(email, password);
    handleLoginClose();
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={5}>
          <Card show={showLoginCard} onHide={handleLoginClose}>
            <Card.Header closeButton>
              <Card.Title>Login</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleLoginSubmit}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="my-2">
      <FontAwesomeIcon icon={faUser} className="mx-2" />
      Login
    </Button>
              </Form>
              <p>If you do not have an account? <a href="/signup">Signup</a></p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;