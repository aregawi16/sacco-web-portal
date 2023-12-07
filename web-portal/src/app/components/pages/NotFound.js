import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NotFound = () => {
    return (
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 Page Not Found</h1>
        <FontAwesomeIcon icon={faExclamationCircle} className="text-6xl text-red-500 mb-4" />
        <p className="text-xl">Oops! The page you're looking for doesn't exist.</p>
        {/* Add additional content or styling as needed */}
      </div>
    );
  };
export default NotFound;