import React from 'react';
import { useRoutes, Navigate, Route } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import ContactPage from './components/pages/contact';
import NewsPage from './components/pages/news';
import LoginPage from './components/auth/login';
import SignupPage from './components/auth/signup';

export default function Routes() {
  const routing = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/contact',
      element: <ContactPage />,
    },
    {
      path: '/news',
      element: <NewsPage />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/signup',
      element: <SignupPage />,
    },
    // Add more routes here if needed
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ]);

  return (
    <>
      <Route path="/" element={routing} />
    </>
  );
}