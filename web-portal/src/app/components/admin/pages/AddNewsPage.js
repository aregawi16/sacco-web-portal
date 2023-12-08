import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { NewsService } from '../../../services/news.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faSave } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const AddNewsPage = () => {
  const initialValues = {
    title: '',
    description: '',
    image: null,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    image: Yup.mixed().required('Image is required'),
  });
  const navigate  = useNavigate();
  const newsService = new NewsService();
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleBack = ()=>{
    navigate('/admin/news');
  };
  const onSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('image', values.image);
    await newsService.addNews(formData)
     .then(response=>{
       // setNews(response.data);
       resetForm();
   
     })
     .catch(err=>{
      console.log(err);
     })
   };
 
  return (
    <Container>
      <Row>
        <Card>
          <Card.Header>
          <h1>Add News</h1>
          </Card.Header>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ setFieldValue }) => (
              <Form>
                <Card.Body>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <Field type="text" id="title" name="title" className="form-control" />
                  <ErrorMessage name="title" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <Field as="textarea" id="description" name="description" className="form-control" rows={4} />
                  <ErrorMessage name="description" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">Image</label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    className="form-control"
                    onChange={(event) => {
                      setFieldValue("image", event.currentTarget.files[0]);
                    }}
                  />
                  <ErrorMessage name="image" component="div" className="text-danger" />
                </div>
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
      </Row>
    </Container>
  );
};

export default AddNewsPage;