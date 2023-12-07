import axios from "axios";

export class ServicesService {
  constructor() {
    this.httpServices = "http://localhost:6767/api/Service";
  }

  async getServices() {
    const response = await axios.get(this.httpServices);
    return response;
  }

  async getServicesById(id) {
    const response = await axios.get(`${this.httpServices}/${id}`);
    return response;
  }

  async addServices(Services) {
    const response = await axios.post(this.httpServices, Services);
    return response.data;
  }

  async updateServices(id, Services) {
    const response = await axios.put(`${this.httpServices}/${id}`, { Services });
    return response.data;
  }

  async deleteServices(id) {
    const response = await axios.delete(`${this.httpServices}/${id}`);
    return response.data;
  }
}