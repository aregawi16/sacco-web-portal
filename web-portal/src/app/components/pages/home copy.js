import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/pagination';

import Swiper from 'swiper';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const HomePage1 = () => {
  // Example data for latest news and another section
  const latestNews = [
    {
      title: 'Latest News 1',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'October 27, 2023',
      image: 'https://img.freepik.com/free-photo/break-outside-lesson_329181-3000.jpg',
    },
    {
      title: 'Latest News 2',
      info: 'Praesent eget lectus vitae ex scelerisque fringilla.',
      date: 'October 26, 2023',
      image: 'https://img.freepik.com/free-photo/break-outside-lesson_329181-3000.jpg',
    },
  ];

  const anotherSectionItems = [
    {
      title: 'Section Item 1',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://example.com/item1.jpg',
    },
    {
      title: 'Section Item 2',
      info: 'Praesent eget lectus vitae ex scelerisque fringilla.',
      image: 'https://example.com/item2.jpg',
    },
  ];
 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);
  
  const ImageSlider = () => {
    return (
      <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
         <img src={slider1} alt="Image 1" className="rounded" />
        </div>
        <div className="swiper-slide">
        <img src={slider2} alt="Image 2" className="rounded" />
        </div>
        <div className="swiper-slide">
        <img src={slider3} alt="Image 3" className="rounded" />
        </div>
        <div className="swiper-slide">
        <img src={slider4} alt="Image 4" className="rounded"/>
        </div>
        <div className="swiper-slide">
        <img src={slider5} alt="Image 5" className="rounded" />
        </div>
        <div className="swiper-slide">
        <img src={slider6} alt="Image 6" className="rounded"/>
        </div>
        <div className="swiper-slide">
        <img src={slider7} alt="Image 7" className="rounded"/>
        </div>
        <div className="swiper-slide">
        <img src={slider8} alt="Image 8" className="rounded" />
        </div>
        <div className="swiper-slide">
        <img src={slider9} alt="Image 9" className="rounded" />
        </div>
        <div className="swiper-slide">
        <img src={slider10} alt="Image 10" className="rounded"/>
        </div>
        <div className="swiper-slide">
        <img src={slider11} alt="Image 11" className="rounded"/>
        </div>
        <div className="swiper-slide">
        <img src={slider12} alt="Image 12" className="rounded"/>
        </div>
      </div>
      <div className="swiper-pagination"></div>

      </div>
    );
  };
  return (
    <div>
      <section className="latest-news py-5">
        <Container>
            
      
      <ImageSlider />


          {/* <h2 className="text-center mb-5">Latest News</h2> */}
          
          
          <Row>
            {latestNews.map((news, index) => (
              <Col key={index} md={6} lg={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={news.image} />
                  <Card.Body>
                    <Card.Title>{news.title}</Card.Title>
                    <Card.Text>{news.info}</Card.Text>
                    <div className="d-flex align-items-center">
                      <small className="text-muted">{news.date}</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="another-section py-5">
        <Container>
          <h2 className="text-center mb-5">Another Section</h2>
          <Row>
            {anotherSectionItems.map((item, index) => (
              <Col key={index} md={6} lg={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.info}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;