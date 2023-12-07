import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, Row, Col, Button, Form as BootstrapForm, Card } from 'react-bootstrap';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faSave } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../../services/user.service';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  profilePicture: Yup.mixed().required('profilePicture is required'),
});

const AddUserPage = () => {
  const initialValues = {
    name: '',
    username: '',
    email: '',
    password: '',
    profilePicture: null,
  };
  const navigate = useNavigate();

  const userService = new UserService();
  const [selectedImage, setSelectedImage] = useState(null);
  const handleBack = ()=>{
    navigate('/admin/users');
  };
  const handleImageChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    setFieldValue('profilePicture', file);
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('username', values.username);
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('profilePicture', values.profilePicture);
     userService.addUser(formData)
    .then(response=>{
    //   setAboutData(response.data);
  
    })
    .catch(err=>{
     console.log(err);
    })
    // Handle form submission with the FormData
    console.log(formData);
  };

  return (
    <Container>
      <Card>
          <Card.Header>
          <h1>Add User</h1>
          </Card.Header>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ setFieldValue }) => (
          <Form>
            <Card.Body>
            <Row>
              <Col>
                <BootstrapForm.Group>
                  <BootstrapForm.Label>Name</BootstrapForm.Label>
                  <Field as={BootstrapForm.Control} type="text" id="name" name="name" />
                  <ErrorMessage name="name" component="div" className="error-message" />
                </BootstrapForm.Group>
              </Col>
              <Col>
                <BootstrapForm.Group>
                  <BootstrapForm.Label>Username</BootstrapForm.Label>
                  <Field as={BootstrapForm.Control} type="text" id="username" name="username" />
                  <ErrorMessage name="username" component="div" className="error-message" />
                </BootstrapForm.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <BootstrapForm.Group>
                  <BootstrapForm.Label>Email</BootstrapForm.Label>
                  <Field as={BootstrapForm.Control} type="email" id="email" name="email" />
                  <ErrorMessage name="email" component="div" className="error-message" />
                </BootstrapForm.Group>
              </Col>
              <Col>
                <BootstrapForm.Group>
                  <BootstrapForm.Label>Password</BootstrapForm.Label>
                  <Field as={BootstrapForm.Control} type="password" id="password" name="password" />
                  <ErrorMessage name="password" component="div" className="error-message" />
                </BootstrapForm.Group>
              </Col>
            </Row>

            <BootstrapForm.Group>
              <BootstrapForm.Label>Profile Picture</BootstrapForm.Label>
              <BootstrapForm.Control type="file" accept="profilePicture/*" onChange={(event) => handleImageChange(event, setFieldValue)} />
              <ErrorMessage name="profilePicture" component="div" className="error-message" />
              {selectedImage && <img src={selectedImage} alt="Selected" style={{ marginTop: '10px', maxWidth: '200px' }} />}
            </BootstrapForm.Group>

            </Card.Body>
                <Card.Footer className='d-flex justify-content-between'>
            <Button variant="danger" onClick={handleBack}>
              <FontAwesomeIcon icon={faBackward} /> Back
            </Button>
            <Button variant="primary" type="submit" >
              <FontAwesomeIcon icon={faSave} /> Save
            </Button>
           
            </Card.Footer>            </Form>
        )}
      </Formik>
      </Card>
    </Container>
  );
};

export default AddUserPage;