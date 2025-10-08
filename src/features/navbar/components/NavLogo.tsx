import React from 'react';
import { Link } from 'react-router-dom';

export const NavLogo: React.FC = () => {
  return (
    <Link to="/" className="flex flex-col justify-center h-full">
      <div className="flex items-center space-x-1">
        <div className="w-8 h-8 rounded-full bg-site-maroon flex items-center justify-center">
          <span className="text-sm font-bold text-site-cream">WS</span>
        </div>
        <span className="text-xl font-bold tracking-tight text-gray-900">
          WHITESTONE <span className="text-site-maroon">IT</span>
        </span>
      </div>
      <span className="text-[10px] font-semibold tracking-wider text-gray-500 hidden sm:block -mt-1 ml-10">
        PROFESSIONALS FOR YOUR INNOVATION
      </span>
    </Link>
  );
};
