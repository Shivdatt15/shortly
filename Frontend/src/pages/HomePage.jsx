import React from 'react';
import { Link } from '@tanstack/react-router';   // ✅ Correct import
import UrlForm from '../components/UrlForm';
import mainLogo from '../assets/main_logo.jpeg';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md text-white">
        <h1 className="text-2xl font-bold text-center mb-6">
          <Link to="/dashboard">
            <img 
              src={mainLogo} 
              alt="Shortly Logo" 
              className="h-8 w-auto mx-auto"
            />
          </Link>
        </h1>
        <UrlForm />
      </div>
    </div>
  );
};

export default HomePage;
