import React from 'react';
import { Link } from '@tanstack/react-router';   // ✅ Correct import
import UrlForm from '../components/UrlForm';
import UserUrl from '../components/UserUrl';
import mainLogo from '../assets/main_logo.jpeg';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 pt-20">
       <div className="bg-gray-900 -mt-20 p-8 rounded-lg shadow-md w-full max-w-4xl  text-white">
           <h1 className="flex justify-center mb-6">
          <Link to="/">
            <img 
              src={mainLogo} 
              alt="Shortly Logo" 
              className="h-10 w-auto" 
            />
          </Link>
        </h1>
        <UrlForm />
        <UserUrl />
      </div>
    </div>
  );
};

export default DashboardPage;
