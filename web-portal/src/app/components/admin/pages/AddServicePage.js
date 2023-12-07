import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {ServicesService} from '../../../services/services.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faSave } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const AddServicePage = () => {
  const serService = new ServicesService();
const navigate = useNavigate();
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await serService.addServices(values);
      // Handle successful API call, e.g., show success message, redirect, etc.
      console.log('Service data saved successfully');
      resetForm();
    } catch (error) {
      // Handle API call error, e.g., show error message, etc.
      console.error('Failed to save Service data:', error.message);
    }
  };

  const handleBack = ()=>{
    navigate('/admin/services');
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
  });

  return (
    <Container>
      <Card>

<Card.Header> <h4 className="text-center">Add New Service</h4></Card.Header>
      <Formik
        initialValues={{ title: '', description: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Card.Body>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Field type="text" name="title" className="form-control" required />
              <ErrorMessage name="title" component="div" className="text-danger" />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Field as="textarea" name="description" className="form-control" rows={5} required />
              <ErrorMessage name="description" component="div" className="text-danger" />
            </Form.Group>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-between'>
            <Button variant="danger" onClick={handleBack}>
              <FontAwesomeIcon icon={faBackward} /> Back
            </Button>
            <Button variant="primary" type="submit" >
              <FontAwesomeIcon icon={faSave} /> Save
            </Button>
           
            </Card.Footer>
          </Form>
        )}
      </Formik>
      </Card>
    </Container>
  );
};

export default AddServicePage;