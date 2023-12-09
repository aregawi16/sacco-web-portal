import axios from "axios";

export class ContactService {
  constructor() {
    this.httpContact = process.env.REACT_APP_API_BACKEND_URL+"Contact";
  }

  async getContact() {
    const response = await axios.get(this.httpContact);
    return response;
  }

  async getContactById(id) {
    const response = await axios.get(`${this.httpContact}/${id}`);
    return response;
  }

  async addContact(Contact) {
    const response = await axios.post(this.httpContact, Contact);
    return response.data;
  }

  async updateContact(id, Contact) {
    const response = await axios.put(`${this.httpContact}/${id}`, { Contact });
    return response.data;
  }

  async deleteContact(id) {
    const response = await axios.delete(`${this.httpContact}/${id}`);
    return response.data;
  }
}