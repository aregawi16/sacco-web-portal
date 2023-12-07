import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import { AboutService } from '../../services/about.service';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {

  const [aboutData, setAboutData] = useState([]);
  const [general, setGeneral] = useState('');
  const [mission, setMission] = useState('');
  const [goal, setGoal] = useState('');
  const [vision, setVision] = useState('');
  const [program, setProgram] = useState('');
  const [values, setValues] = useState([]);
  const [starategy, setStarategy] = useState('');
  const aboutService = new AboutService();
  const naviate = useNavigate();

useEffect(() => {
  fetchAboutData();
}, []);
const fetchAboutData = async () => {
  await aboutService.getAbout()
  .then(response=>{
    setAboutData(response.data);
    console.log(response.data);
    let about = response.data;
    setGeneral(about.find(q=>q.aboutType===0)?.description);
    setMission(about.find(q=>q.aboutType===2)?.description);
    setVision(about.find(q=>q.aboutType===1)?.description);
    setValues(about.filter(q=>q.aboutType===3));
    setGoal(about.find(q=>q.aboutType===4)?.description);
    setStarategy(about.find(q=>q.aboutType===5)?.description);
    setProgram(about.find(q=>q.aboutType===6)?.description);

  })
  .catch(err=>{
   console.log(err);
  })
};
  return (
    <Container>
      <Row className="mt-5">
        <Col md={6}>
          <Image src="https://as2.ftcdn.net/v2/jpg/06/27/30/71/1000_F_627307157_0OJGZwUnOZEDYB8JKjk4WpLFmSdH7gmq.jpg" alt="Image 1" roundedCircle fluid />
          <div>
          <h2>About Us</h2>
           
            <p>
            {
  general
}              </p>
          </div>
        </Col>
        <Col md={6}>
          <div>
           
            <h4>Our Mission</h4>
            <p>
{mission}            </p>
            <h4>Our Vision</h4>
            <p>
{
  vision
}            </p>
            </div>
            <div>
            <h4>Our Values</h4>
            <ListGroup>
  {values.map((newItem, idx) => (
    <ListGroup.Item
      key={idx}
      style={{ backgroundColor: '#207daf', color: 'white',borderRadius: '50%',textAlign: 'center'
    }}
      className="custom-list-item justify-content-center align-content-center"
    >
     <h6> {newItem.description}</h6>
    </ListGroup.Item>
  ))}
</ListGroup>
            </div>
            <div>
            <h4>Our Programs</h4>
            <p>
        {program}           
         </p>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;