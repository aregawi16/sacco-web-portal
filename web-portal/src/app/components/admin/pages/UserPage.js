import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Dropdown,Button } from 'react-bootstrap';
import { UserService } from '../../../services/user.service';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {

    const [users, setUsers] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;
    const userService = new UserService();
    const navigate = useNavigate();
    useEffect(() => {
        fetchUsers();
      }, []);
     const fetchUsers = async () => {
      console.log(apiUrl);
        await userService.getUsers()
        .then(response=>{
            setUsers(response.data);
      
        })
        .catch(err=>{
         console.log(err);
        })
    };
    

  const handleEdit = (userId) => {
    // Handle edit functionality for the user with the given userId
    console.log(`Edit user with ID: ${userId}`);
  };
  const handleAddNewUser = () => {
    navigate('/admin/add-user'); // Replace '/admin/add-user' with the correct path
    // console.log('Add new about');
    // const newAbout = {
    //   id: Date.now(),
    //   aboutType: '',
    //   description: '',
    // };
    // setAboutData([...aboutData, newAbout]);
  };


  const handleDelete = (userId) => {
    // Handle delete functionality for the user with the given userId
    console.log(`Delete user with ID: ${userId}`);
  };

  return (
    <div>
      <h1>User Page</h1>
      <Button variant="primary" className='m-2' onClick={handleAddNewUser}>Add New</Button>
 <Row>
        {users.map((user, index) => (
          <Col key={index} sm={6} md={4} lg={3} className='mt-4'>
            <Card>
              <div className="card-dropdown">
                <Card.Header>
                    {user.name}
                    <Dropdown>
                  <Dropdown.Toggle variant="link" id={`dropdown-${user.userId}`}>
                    <i className="fas fa-ellipsis-v"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu align="right">
                    <Dropdown.Item onClick={() => handleEdit(user.id)}>Edit</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDelete(user.id)}>Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </Card.Header>
               
              </div>
              <Card.Img
    variant="top"
    src={apiUrl+"profile-pictures/"+ user.profilePicture}
        className="rounded-circle"
    style={{ width: "100px", height: "100px", objectFit: "cover" }}
     />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                  <p>Username: {user.username}</p>
                  <p>Email: {user.email}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UserPage;