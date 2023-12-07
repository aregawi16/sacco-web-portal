import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { faCog, faComment, faDesktop, faImage, faTh, faUser } from '@fortawesome/free-solid-svg-icons';
import { ContactService } from '../../services/contact.service';
import { ServicesService } from '../../services/services.service';


const ServicePage = () => {
    const [services, setServices]= useState([]);
    const serviceApiService = new ServicesService();
    const apiUrl = process.env.REACT_APP_API_URL;
  
  
    useEffect(() => {
      fetchServices();
    }, []);
    

    
    const fetchServices = async () => {
      try {
        const response = await serviceApiService.getServices();
        console.log(response.data);
        setServices(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    return (
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
    );
  };
export default ServicePage;