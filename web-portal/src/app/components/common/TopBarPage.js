import React from 'react';
import { faSearch, faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopBarPage = () => {
  return (
    <div style={{ backgroundColor: '#F2F7A1', color: 'black' }} id="topbar" className="d-flex align-items-center fixed-top p-2">
        <a style={{borderRight:'3px solid white',paddingRight: "10px"}} className="nav-link" href="/">
          <FontAwesomeIcon style={{ width: '15px', marginLeft: '10px' }} icon={faPhone} />
          <span>+251938778400</span>
        </a>
        <a  className="nav-link" href="/">
          <FontAwesomeIcon style={{ width: '15px',  marginLeft: '10px' }} icon={faEnvelope} />
          <span>info@mgsolution.com</span>
        </a>
    </div>
  );
};

export default TopBarPage;