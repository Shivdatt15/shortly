import React from 'react';
import { Link } from '@tanstack/react-router';
import mainLogo from '../assets/main_logo.jpeg';
const Navbar = () => {
  return (
    <nav className="bg-black border border-b-lime-400">
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      <div className="flex items-center">
        <Link to="/">
          <img 
            src={mainLogo} 
            alt="Shortly Logo" 
            className="h-8 w-auto"
          />
        </Link>
      </div>
      <div className="flex items-center">
        {/* Auth buttons */}
        <Link
          to="/auth"
          className="bg-lime-400 hover:bg-lime-500 text-black px-4 py-2 rounded-md text-sm font-medium"
        >
          Login
        </Link>
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;