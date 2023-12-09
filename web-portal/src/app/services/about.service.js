import axios from "axios";

export class AboutService {
  constructor() {
    this.httpAbout = process.env.REACT_APP_API_BACKEND_URL+"About";
  }

  async getAbout() {
    const response = await axios.get(this.httpAbout);
    return response;
  }

  async getAboutById(id) {
    const response = await axios.get(`${this.httpAbout}/${id}`);
    return response;
  }

  async addAbout(About) {
    const response = await axios.post(this.httpAbout, About);
    return response.data;
  }

  async updateAbout(id, About) {
    const response = await axios.put(`${this.httpAbout}/${id}`, About );
    return response.data;
  }

  async deleteAbout(id) {
    const response = await axios.delete(`${this.httpAbout}/${id}`);
    return response.data;
  }
}