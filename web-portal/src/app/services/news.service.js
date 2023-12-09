import axios from "axios";

export class NewsService {
  constructor() {
    this.httpNews = process.env.REACT_APP_API_BACKEND_URL+"news";
  }

  async getNews() {
    const response = await axios.get(this.httpNews);
    return response;
  }

  async getNewsById(id) {
    const response = await axios.get(`${this.httpNews}/${id}`);
    return response;
  }

  async addNews(News) {
    const response = await axios.post(this.httpNews, News);
    return response.data;
  }

  async updateNews(id, News) {
    const response = await axios.put(`${this.httpNews}/${id}`, { News });
    return response.data;
  }

  async deleteNews(id) {
    const response = await axios.delete(`${this.httpNews}/${id}`);
    return response.data;
  }
}