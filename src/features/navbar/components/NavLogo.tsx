import React from 'react';
import { Link } from 'react-router-dom';

export const NavLogo: React.FC = () => {
  return (
    <Link to="/" className="flex flex-col justify-center h-full">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 flex items-center justify-center">
          <img src={"./assets/favicon.ico"} alt="Logo" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-gray-900 leading-none">
            WhiteStone <span className="text-primary">InfoTech</span>
          </span>
          <span className="text-[9px] font-semibold tracking-wider text-gray-500 hidden sm:block">
            PROFESSIONALS FOR YOUR INNOVATION
          </span>
        </div>
      </div>
    </Link>
  );
};
