import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap-pagination';
import { BsPencilSquare, BsTrashFill, BsPlus } from 'react-icons/bs';
import { AboutService } from '../../../services/about.service';
import { useNavigate } from 'react-router-dom';

// Define the AboutType enum
const AboutType = {
  0: 'General',
  1: 'Vision',
  2: 'Mission',
  3: 'Value',
  4: 'Goal',
  5: 'Strategy',
};

const AdminAboutUsPage = () => {
  const [aboutData, setAboutData] = useState([]);
  const aboutService = new AboutService();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      const response = await aboutService.getAbout();
      setAboutData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (about) => {
    navigate(`/admin/add-about/${about.aboutId}`);
    

  };

  const handleDelete = (aboutId) => {
    try
  {
    aboutService.deleteAbout(aboutId);
    setAboutData(aboutData.filter((item) => item.aboutId !== aboutId));
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddNewAbout = () => {
    navigate('/admin/add-about');
    console.log('Add new about');
    const newAbout = {
      id: Date.now(),
      aboutType: '',
      description: '',
    };
    setAboutData([...aboutData, newAbout]);
  };

 

  return (
    <Container>
      <h1 className="text-center mb-5">About Us</h1>
      <Button variant="primary" onClick={handleAddNewAbout}>
        <BsPlus size={20} /> Add New
      </Button>
      {aboutData.map((item) => (
        <Row key={item.id} className="mb-1 align-items-center border-bottom">
          <Col xs={12} md={4}>
            <h6>{AboutType[item.aboutType]}</h6>
          </Col>
          <Col xs={12} md={6}>
            <p>{item.description}</p>
          </Col>
          <Col xs={12} md={2}>
            <Button
              variant="link"
              className="text-primary"
              onClick={() => handleEdit(item)}
            >
              <BsPencilSquare size={20} />
            </Button>
            <Button
              variant="link"
              className="text-danger"
              onClick={() => handleDelete(item.aboutId)}
            >
              <BsTrashFill size={20} />
            </Button>
          </Col>
        </Row>
      ))}
      {/* {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onSelect={handlePageChange}
        />
      )} */}
    </Container>
  );
};

export default AdminAboutUsPage;