import React from 'react';

const Footer = () => {
  const linkStyle = {
    color: 'white',
  };
  return (
    <footer className="footer" style={{backgroundColor:'#207daf'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Company</h5>
            <ul className="footer-links text-white">
              <li><a href="/about" style={linkStyle}>About Us</a></li>
              <li><a href="/contact" style={linkStyle}>Contact Us</a></li>
              <li><a href="/terms" style={linkStyle}>Terms of Service</a></li>
              <li><a href="/privacy" style={linkStyle}>Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>Quick Links</h5>
            <ul className="footer-links text-white">
              <li><a href="/home" style={linkStyle}>Home</a></li>
              <li><a href="/prodct" style={linkStyle}>Products</a></li>
              <li><a href="/service" style={linkStyle}>Services</a></li>
              <li><a href="/faq" style={linkStyle}>FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className='row'>
        <p>© 2023 Your Website. All rights reserved. Designed by MG Solution!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;