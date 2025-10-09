import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { MenuItem } from '../types';

interface NavMenuItemProps {
  item: MenuItem;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const NavMenuItem: React.FC<NavMenuItemProps> = ({
  item,
  isOpen,
  onMouseEnter,
  onMouseLeave,
}) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;

  const buttonClasses = `
    relative px-4 py-2 text-sm font-medium transition-all duration-200 flex items-center space-x-1
    ${isActive || isOpen ? 'text-site-maroon' : 'text-gray-700 hover:text-site-maroon'}
  `;

  const underlineClasses = `
    absolute bottom-0 left-0 h-[2px] w-full bg-site-maroon transition-all duration-300
    ${isActive || isOpen ? 'scale-x-100' : 'scale-x-0'}
  `;

  if (item.path && !item.hasDropdown) {
    return (
      <Link to={item.path} className={buttonClasses}>
        <span>{item.name}</span>
        <span className={underlineClasses}>&nbsp;</span>
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span>{item.name}</span>
      {item.hasDropdown && (
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      )}
      <span className={underlineClasses}>&nbsp;</span>
    </button>
  );
};