import React, { useState, useEffect } from 'react';
import AppRoutes from './AppRoutes';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SettingsPanel from './SettingsPanel';
import Footer from './Footer';
import { withTranslation } from "react-i18next";

function Admin()  {
  const [isFullPageLayout, setIsFullPageLayout] = useState(false);

  useEffect(() => {
    const onRouteChanged = () => {
      console.log('ROUTE CHANGED');
      const { i18n } = withTranslation();
      const body = document.querySelector('body');
      if (window.location.pathname === '/layout/RtlLayout') {
        body.classList.add('rtl');
        i18n.changeLanguage('ar');
      } else {
        body.classList.remove('rtl');
        i18n.changeLanguage('en');
      }
      window.scrollTo(0, 0);
      const fullPageLayoutRoutes = ['/user-pages/login-1', '/user-pages/register-1', '/user-pages/lockscreen', '/error-pages/error-404', '/error-pages/error-500', '/general-pages/landing-page'];
      for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
        if (window.location.pathname === fullPageLayoutRoutes[i]) {
          setIsFullPageLayout(true);
          document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
          break;
        } else {
          setIsFullPageLayout(false);
          document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
        }
      }
    };

    window.addEventListener('routechange', onRouteChanged);
    return () => window.removeEventListener('routechange', onRouteChanged);
  }, []);

  return (
    <div className="container-scroller">
      {isFullPageLayout ? '' : <Navbar />}
      <div className="container-fluid page-body-wrapper">
        {isFullPageLayout ? '' : <Sidebar />}
        <div className="main-panel">
          <div className="content-wrapper">
            <AppRoutes />
            {isFullPageLayout ? '' : <SettingsPanel />}
          </div>
          {isFullPageLayout ? '' : <Footer />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
