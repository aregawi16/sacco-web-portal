
import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';


const WebsiteLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;