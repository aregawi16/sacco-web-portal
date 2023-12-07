import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsCalendar } from 'react-icons/bs';
import '../styles/newslist.css'
import { NewsService } from '../../services/news.service';

const NewsPage = () => {
  // Example news data
  const [news, setNews]=useState([]);
  const newsService = new NewsService();
  const apiUrl = process.env.REACT_APP_API_URL;


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
    <Container className="py-5">
      <h1 className="text-center mb-5">News</h1>
      <Row>
        {news.map((news, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Card className="news-card">
            <div className="news-card-image">
<Card.Img variant="top" src={apiUrl+"news-images/"+news.image} />
</div>
              <Card.Body className='news-card-content '>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.description}</Card.Text>
                <div className="d-flex align-items-center">
                  <BsCalendar className="me-2" />
                  <small className="text-muted">{news.dateCreated}</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsPage;