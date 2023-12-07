import React, { useState } from 'react';

import Footer from '../admin/Footer';
import Navbar from '../admin/Navbar';
import Sidebar from '../admin/Sidebar';
import '../styles/sidebar.css'

const AdminLayout = ({ children }) => {
  const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

// const StyledRoot = styled('div')({
//   display: 'flex',
//   minHeight: '100%',
//   overflow: 'hidden',
// });
const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar onOpenNav={() => setOpen(true)} />

      <div className="main-container">
        <Sidebar openNav={open} onCloseNav={() => setOpen(false)} />

        <div className="content-wrapper card m-2 p-4">
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminLayout;