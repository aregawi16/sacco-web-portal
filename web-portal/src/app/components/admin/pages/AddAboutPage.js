import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import { AboutService } from '../../../services/about.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faSave } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';

const AboutType = {
  0: 'General',
  1: 'Vision',
  2: 'Mission',
  3: 'Value',
  4: 'Goal',
  5: 'Strategy',
};

const AddAboutPage = () => {
  const aboutService = new AboutService();
  const navigate = useNavigate();
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({
    aboutId: id,
    aboutType: '',
    description: '',
  });

  const handleBack = () => {
    navigate('/admin/about');
  };

  const schema = yup.object().shape({
    aboutType: yup.string().required('About Type is required'),
    description: yup.string().required('Description is required'),
  });

  useEffect(() => {
    if (id !==null) {
      fetchAboutDataById();
    }
  }, [id]);

  const fetchAboutDataById = async () => {
    try {
      const response = await aboutService.getAboutById(id);
      console.log(response.data);
      if (response.data) {
        const { aboutType, description } = response.data;
        const mappedData = {
          aboutId: id,
          aboutType: aboutType.toString(),
          description: description,
        };
        console.log(mappedData);

        setInitialValues(mappedData); // Update initialValues with mapped data
      }
    } catch (error) {
      console.error('Failed to fetch about data:', error.message);
    }
  };
  

  const handleSubmit = async (values, { resetForm }) => {
    try {
      values.aboutType = parseInt(values.aboutType);

      if (id) {
        // Update existing about data
        await aboutService.updateAbout(id, values);
        console.log('About data updated successfully');
      } else {
        // Add new about data
        await aboutService.addAbout(values);
        console.log('About data added successfully');
      }

      resetForm();
    } catch (error) {
      console.error('Failed to save about data:', error.message);
    }
  };

  const pageTitle = id ? 'Edit About' : 'Add New About';
  const saveButtonLabel = id ? 'Update' : 'Save';

  return (
    <Container>
      <Card>
        <Card.Header>
          <h4 className="text-center">{pageTitle}</h4>
        </Card.Header>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}

        >
          {({ handleSubmit, values, handleChange,errors }) => (
            <Form>
              <Card.Body>
                <Form.Group controlId="aboutType">
                  <Form.Label>About Type</Form.Label>
                  <Field
                    as="select"
                    name="aboutType"
                    className="form-control"
                  >
                    <option value="">Select an About Type</option>
                    {Object.entries(AboutType).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value}
                      </option>
                    ))}
                  </Field>
                  {errors.aboutType && (
  <div className="text-danger">{errors.aboutType}</div>
)}              </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Field
                    as="textarea"
                    name="description"
                    className="form-control"
                    rows={5}
                    
                  />
     {errors.description && (
  <div className="text-danger">{errors.description}</div>
)}                   </Form.Group>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between">
                <Button variant="danger" onClick={handleBack}>
                  <FontAwesomeIcon icon={faBackward} /> Back
                </Button>
                <Button variant="primary" type="submit">
                  <FontAwesomeIcon icon={faSave} /> {saveButtonLabel}
                </Button>
              </Card.Footer>
            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  );
};

export default AddAboutPage;