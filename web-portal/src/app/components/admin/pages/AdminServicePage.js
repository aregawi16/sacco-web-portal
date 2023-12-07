import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsPencilSquare, BsPlus, BsTrashFill } from 'react-icons/bs';
import { ServicesService } from '../../../services/services.service';
import { useNavigate } from 'react-router-dom';

const AdminServicePage = () => {
    const [serviceList, setServiceList] = useState([]);
    const servicesService = new ServicesService();
    const navigate = useNavigate();

  useEffect(() => {
    fetchServiceList();
  }, []);
 const fetchServiceList = async () => {
    await servicesService.getServices()
    .then(response=>{
      setServiceList(response.data);
  
    })
    .catch(err=>{
     console.log(err);
    })
};

  const handleEdit = (serviceId) => {
    // Handle edit functionality here
    console.log(`Edit service with ID: ${serviceId}`);
  };

  const handleDelete = async (serviceId) => {
    await servicesService.deleteServices(serviceId)
    .then(response=>{
      // setServiceList(response.data);
      setServiceList(serviceList.filter((item) => item.serviceId !== serviceId));

  
    })
    .catch(err=>{
     console.log(err);
    }); 
    console.log(`Delete service with ID: ${serviceId}`);
  };
 
  const handleAddNewService = () => {
    // Handle add new service functionality here
    navigate('/admin/add-service');
    console.log('Add new service');
  };
  return (
    <Container>
      <h1 className="text-center mb-5">Services</h1>
      <Button variant="primary" onClick={handleAddNewService}>
          <BsPlus size={20} /> Add New Service
        </Button>
      {serviceList.map((service) => (
        <Row key={service.id}           className="mb-4 align-items-center border-bottom rounded ">
          <Col xs={12} md={6}>
            <h6>{service.title}</h6>
          </Col>
          <Col xs={12} md={4}>
            <p>{service.description}</p>
          </Col>
          <Col xs={12} md={2}>
            <Button
              variant="link"
              className="text-primary"
              onClick={() => handleEdit(service.serviceId)}
            >
              <BsPencilSquare size={20} />
            </Button>
            <Button
              variant="link"
              className="text-danger"
              onClick={() => handleDelete(service.serviceId)}
            >
              <BsTrashFill size={20} />
            </Button>
          </Col>
        </Row>
      ))}
    
    </Container>
  );
};

export default AdminServicePage;