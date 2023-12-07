
    import { faCheckCircle, faCog, faDashboard, faInfoCircle, faNewspaper, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav } from 'react-bootstrap';
import '../styles/sidebar.css'

    function Sidebar() {
      return (
        <div className="sidebar">
        
          <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link className="nav-item nav-profile">
            <a href="!#" className="nav-link" onClick={evt =>evt.preventDefault()}>
              <div className="nav-profile-image">
                <img src={ require("../assets/images/faces/face1.jpg") } alt="profile" />
                <span className="login-status online"></span> {/* change to offline or busy as needed */}
              </div>
              <div className="nav-profile-text">
                <span className="font-weight-bold mb-2">David Grey. H</span>
                <span className="text-secondary text-small">Project Manager</span>
              </div>
              <FontAwesomeIcon icon={faCheckCircle} className="text-success nav-profile-badge" />            </a>
          </Nav.Link>
            <Nav.Link href="/admin">
              <FontAwesomeIcon icon={faDashboard} className="icon" />
              Dashboard
            </Nav.Link>
            <Nav.Link href="/admin/about">
              <FontAwesomeIcon icon={faInfoCircle} className="icon" />
              About
            </Nav.Link>
            <Nav.Link href="/admin/services">
              <FontAwesomeIcon icon={faCog} className="icon" />
              Services
            </Nav.Link>
            <Nav.Link href="/admin/contact">
              <FontAwesomeIcon icon={faPhone} className="icon" />
              Contact
            </Nav.Link>
            <Nav.Link href="/admin/news">
              <FontAwesomeIcon icon={faNewspaper} className="icon" />
              News
            </Nav.Link>
            <Nav.Link href="/admin/users">
              <FontAwesomeIcon icon={faUser} className="icon" />
              Users
            </Nav.Link>
            <Nav.Link href="/admin/settings">
              <FontAwesomeIcon icon={faCog} className="icon" />
              Settings
            </Nav.Link>
            
          </Nav>
        </div>
      );
    }
    
    export default Sidebar;
    