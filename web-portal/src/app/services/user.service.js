import axios from "axios";

export class UserService {
  constructor() {
    this.httpUser = "http://localhost:6767/api/User";
  }

  async getUsers() {
    const response = await axios.get(this.httpUser);
    return response;
  }

  async getUserById(id) {
    const response = await axios.get(`${this.httpUser}/${id}`);
    return response;
  }

  async addUser(User) {
    const response = await axios.post(this.httpUser, User);
    return response.data;
  }

  async updateUser(id, User) {
    const response = await axios.put(`${this.httpUser}/${id}`, { User });
    return response.data;
  }

  async deleteUser(id) {
    const response = await axios.delete(`${this.httpUser}/${id}`);
    return response.data;
  }
}