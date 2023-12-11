
import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import TopBarPage from '../common/TopBarPage';


const WebsiteLayout = ({ children }) => {
  return (
    <div>
      <TopBarPage />
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;