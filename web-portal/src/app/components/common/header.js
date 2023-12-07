import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../styles/icons.css'

import '../styles/header.css'
import logoLeft from '../assets/logo-left.jpg';
import logoRight from '../assets/logo-right.jpg';
import { Button } from 'react-bootstrap';

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <header >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
        <a className="navbar-brand" href="/">
  <div className="row g-0 align-items-center">
    <div className="col-2 mr-0">
      <img src={logoLeft} alt="Logo Left" className="logo-left" />
    </div>
    <div className="col-4">
      <h5>Addis Ababa City Administration</h5>
      <h6>Cooperative Agencies</h6>
    </div>
    <div className="col-2">
      <img src={logoRight} alt="Logo Right" className="logo-right" />
    </div>
  </div>
</a>
<button className="navbar-toggler" type="button" onClick={toggleSearch}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${isSearchVisible ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
         
              <li className="nav-item">
                <a className="nav-link" href="/">
               <hp>   <FontAwesomeIcon icon={faPhone} /> +251938778400</hp>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
               <p>   <FontAwesomeIcon icon={faEnvelope} /> info@mgsolution.com</p>
                </a>
              </li>
              
       </ul>
       
        </div>
        </div>
      
      </nav>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#207daf' }}>
  <div className="container">
    <button className="navbar-toggler" type="button" onClick={toggleSearch}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${isSearchVisible ? 'show' : ''}`}>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">
          <h6 style={{color:'white'}}><FontAwesomeIcon icon={faHome} /> Home</h6>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/news">
          <h6 style={{color:'white'}}>  News</h6>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/services">
          <h6 style={{color:'white'}}>  Service</h6>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">
            
            <h6 style={{color:'white'}}>  About</h6>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">
          <h6 style={{color:'white'}}>  Contact</h6>
          </a>
        </li>
      </ul>
    </div>
    <div class="ms-auto d-none d-lg-flex">
                        <a class="btn btn-sm-square btn-primary ms-2" href=""><FontAwesomeIcon icon={faFacebook} className="facebook-icon"/></a>
                        <a class="btn btn-sm-square btn-primary ms-2" href=""><FontAwesomeIcon icon={faTwitter} className="facebook-icon"/></a>
                        <a class="btn btn-sm-square btn-primary ms-2" href=""><FontAwesomeIcon icon={faLinkedinIn} className="facebook-icon"/></a>
                        <a class="btn btn-sm-square btn-primary ms-2" href=""><FontAwesomeIcon icon={faYoutube} className="facebook-icon"/></a>
                    </div>
                    </div>
</nav>
     
    </header>
  );
};

export default Header;