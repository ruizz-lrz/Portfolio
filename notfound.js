import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h1>
      <p className="text-lg text-gray-700 mb-6">Oops! The page you are looking for doesn't exist.</p>
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
        Back to Homepage
      </Link>
    </div>
  );
}

export default NotFound;
