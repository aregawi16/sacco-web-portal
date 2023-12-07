import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { BsPencilSquare, BsTrashFill, BsPlus } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { ContactService } from '../../services/contact.service';

const ContactType = {
  0: 'General',
  1: 'Vision',
  2: 'Mission',
  3: 'Value',
  4: 'Goal',
  5: 'Strategy',
};

const AdminContactListPage = () => {
  const [contactData, setContactData] = useState([]);
  const contactService = new ContactService();
  const navigate = useNavigate();

  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    try {
      const response = await contactService.getContacts();
      setContactData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (contact) => {
    navigate(`/admin/add-contact/${contact.contactId}`);
  };

  const handleDelete = async (contactId) => {
    try {
      await contactService.deleteContact(contactId);
      setContactData(contactData.filter((item) => item.contactId !== contactId));
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddNewContact = () => {
    navigate('/admin/add-contact');
  };

  return (
    <Container>
      <h1 className="text-center mb-5">Contact List</h1>
      <Button variant="primary" onClick={handleAddNewContact}>
        <BsPlus size={20} /> Add New
      </Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactData.map((item) => (
            <tr key={item.id}>
              <td>{item.full_name}</td>
              <td>{item.email}</td>
              <td>{item.subject}</td>
              <td>{item.message}</td>
              <td>
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
                  onClick={() => handleDelete(item.contactId)}
                >
                  <BsTrashFill size={20} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminContactListPage;
