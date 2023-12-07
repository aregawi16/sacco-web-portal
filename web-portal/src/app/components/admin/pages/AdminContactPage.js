import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { ContactService } from '../../../services/contact.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

const AdminContactPage = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
     contactService.addContact(contactData)
    .then(response=>{
        // setContactData(response.data);
  
    })
    .catch(err=>{
     console.log(err);
    })
  };

  return (
    <Container>
      <Card>
        <Card.Header>
       <h1 className="text-center">Contact Us</h1>
       </Card.Header>
      <Form onSubmit={handleSubmit}>
      <Card.Body>

        <Form.Group as={Row} controlId="formName" className='mb-3'>
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="name"
              value={contactData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPhone" className='mb-3'>
          <Form.Label column sm={2}>
            Phone
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="tel"
              name="mobileNo"
              value={contactData.mobileNo}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formTelePhone" className='mb-3'>
          <Form.Label column sm={2}>
            Telephone
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="tel"
              name="telephoneNo"
              value={contactData.telephoneNo}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formEmail" className='mb-3'>
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              name="email"
              value={contactData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formAddress" className='mb-3'>
          <Form.Label column sm={2}>
             Address
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="address"
              value={contactData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formStreetAddress" className='mb-3'>
          <Form.Label column sm={2}>
            Street Address
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="streetAddress"
              value={contactData.streetAddress}
              onChange={handleChange}
              placeholder="Enter your street address"
              required
            />
          </Col>
        </Form.Group>
</Card.Body>
<Card.Footer>
        <Form.Group as={Row} controlId="formSubmit" className='mb-3'>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit"> <FontAwesomeIcon icon={faSave} /> Save
</Button>
          </Col>
        </Form.Group>
        </Card.Footer>
      </Form>
      </Card>

    </Container>
  );
};

export default AdminContactPage;