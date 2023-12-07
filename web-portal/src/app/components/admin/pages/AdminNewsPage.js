import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { BsCalendar, BsTrash, BsPencil, BsPlus } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { NewsService } from '../../../services/news.service';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;
  const newsService = new NewsService();

  const handleDelete = (newsId) => {
     newsService.deleteNews(newsId)
    .then(response=>{
      setNews(news.filter((newsItem) => newsItem.newsId !== newsId));
  
    })
    .catch(err=>{
     console.log(err);
    })
    // Perform API request to delete the news item with the provided ID
  };
  const handleAddNews = () => {
    // Handle add new service functionality here
    navigate('/admin/add-news');
    console.log('Add new service');
  };

  const handleEdit = (newsId) => {
    const selectedNews = news.find((newsItem) => newsItem.id === newsId);
    navigate('/admin/add-news', { record: selectedNews });
  };
  useEffect(() => {
    fetchNews();
  }, []);
 const fetchNews = async () => {
  console.log(apiUrl);
    await newsService.getNews()
    .then(response=>{
      setNews(response.data);
  
    })
    .catch(err=>{
     console.log(err);
    })
};

  return (
    <Container className="py-1">
   <h1 className="text-center mb-1">News </h1>
    <Button variant="primary" onClick={handleAddNews} className='m-2'>
          <BsPlus size={20} /> Add News
        </Button>
    <Row>
      {news.map((newsItem) => (
        <Col key={newsItem.id} md={6} lg={4} className="mb-4">
          <Card className="news-card">
            <div className="news-card-image">
              <Card.Img variant="top" src={apiUrl+"news-images/" + newsItem.image} />
            </div>
            <Card.Body className="news-card-content">
              <Card.Title>{newsItem.title}</Card.Title>
              <Card.Text>{newsItem.description}</Card.Text>
              <div className="d-flex align-items-center">
                <BsCalendar className="me-2" />
                <small className="text-muted">{newsItem.dateCreated}</small>
              </div>
              <Card.Footer className="mt-auto">
                <Button variant="danger" size="sm" onClick={() => handleDelete(newsItem.newsId)}>
                  <BsTrash className="me-1" />
                  Delete
                </Button>
                <Button variant="primary" size="sm" className="ms-2" onClick={() => handleEdit(newsItem.newsId)}>
                  <BsPencil className="me-1" />
                  Edit
                </Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  );
};

export default NewsPage;