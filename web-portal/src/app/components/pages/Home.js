import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { faCog, faComment, faDesktop, faImage, faTh, faUser } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Carousel } from 'react-bootstrap';
import '../styles/service.css'
import '../styles/newslist.css'
import slider1 from '../assets/slider/slider1.png';
import slider2 from '../assets/slider/slider2.png';
import slider3 from '../assets/slider/slider3.png';
import slider4 from '../assets/slider/slider4.png';
import slider5 from '../assets/slider/slider5.png';
import slider6 from '../assets/slider/slider6.png';
import slider7 from '../assets/slider/slider7.png';
import slider8 from '../assets/slider/slider8.png';
import slider9 from '../assets/slider/slider9.png';
import slider10 from '../assets/slider/slider10.png';
import slider11 from '../assets/slider/slider11.png';
import slider12 from '../assets/slider/slider12.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NewsService } from '../../services/news.service';
import { ServicesService } from '../../services/services.service';

const HomePage = () => {
  // Example data for latest news and another section
  const [news, setNews]=useState([]);
  const [services, setServices]=useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const newsService = new NewsService();
  const serviceApiService = new ServicesService();
  const apiUrl = process.env.REACT_APP_API_URL;


  useEffect(() => {
    fetchNews();
    fetchServices();
  }, []);
  
  const fetchNews = async () => {
    try {
      const response = await newsService.getNews();
      setNews(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  
  const fetchServices = async () => {
    try {
      const response = await serviceApiService.getServices();
      console.log(response.data);
      setServices(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const NewsList = ({ newsData }) => {
    const [expandedItems, setExpandedItems] = useState([]);
  
    const toggleExpand = (idx) => {
      if (expandedItems.includes(idx)) {
        setExpandedItems(expandedItems.filter((item) => item !== idx));
      } else {
        setExpandedItems([...expandedItems, idx]);
      }
    };
  
    return (
      <div className="news-list m-4">
            <div><h6>News</h6></div>
            <hr />
     <Row>
          {newsData.map((newsItem, idx) => (
            <Col key={idx} sm={6} md={4} lg={4} xl={3}>
              <Card className="news-card">
              <div className="news-card-image">

                <a href='/news'>
                <Card.Img variant="top" src={apiUrl+"news-images/"+newsItem.image}  alt={newsItem.title} />
                </a>
                </div>
                <Card.Body className='news-card-content '>
                  <Card.Title>{newsItem.title}</Card.Title>
                  <Card.Text>
                    {expandedItems.includes(idx)
                      ? newsItem.description
                      : `${newsItem.description.slice(0, 100)}...`}
                  </Card.Text>
                  <Button
                        variant="secondary"

            sx={{ backgroundColor: '#207daf' }}
      onClick={() => toggleExpand(idx)}
                    className="read-more-button"
                  >
                    {expandedItems.includes(idx) ? 'Read Less' : 'Read More'}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  };
  
  const ImageSlider = () => {
    return (
<Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
        <Carousel.Item>
          <img src={slider1} alt="Image 1" className="rounded" />
        </Carousel.Item>
        <Carousel.Item>
        <img src={slider2} alt="Image 2" className="rounded" />
        </Carousel.Item>
        <Carousel.Item>
        <img src={slider3} alt="Image 3" className="rounded" />
        </Carousel.Item>
        <Carousel.Item>
        <img src={slider4} alt="Image 4" className="rounded"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={slider5} alt="Image 5" className="rounded" />
        </Carousel.Item>
        <Carousel.Item>
        <img src={slider6} alt="Image 6" className="rounded"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={slider7} alt="Image 7" className="rounded"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={slider8} alt="Image 8" className="rounded" />
        </Carousel.Item>
        <Carousel.Item>
        <img src={slider9} alt="Image 9" className="rounded" />
        </Carousel.Item>
        <Carousel.Item>
        <img src={slider10} alt="Image 10" className="rounded"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={slider11} alt="Image 11" className="rounded"/>
        </Carousel.Item>

      </Carousel>
    );
  };
  return (
    <div>
      <section className="latest-news py-5">
        <Container>
            
      
      <ImageSlider />


         
          <div>
          <div>
      <NewsList newsData={news} />
    </div>   
     </div>
     
     <section className="section services-section mt-5" id="services">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="section-title">
                    <h2>Services</h2>
                    {/* <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites</p> */}
                </div>
            </div>
        </div>
        <div className="row">
            { services.map((serviceItem, idx) => (

           
            <div className="col-sm-6 col-lg-4">
                <div className="feature-box-1">
                    <div className="icon">
                    <FontAwesomeIcon icon={faDesktop} />
                    </div>
                    <div className="feature-content">
                        <h5>{serviceItem.title}</h5>
                        <p>{serviceItem.description}</p>
                    </div>
                </div>
            </div>
 ))}
        </div>
    </div>
</section>
        </Container>
      </section>

    </div>
  );
};

export default HomePage;