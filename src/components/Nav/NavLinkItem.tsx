import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

// --- Type Definitions ---
export interface SubLink {
  name: string;
  path: string;
}

export interface MenuItem {
  name: string;
  path?: string;
  hasDropdown?: boolean;
  mega?: boolean;
}

export interface NavLinkItemProps {
  item: MenuItem;
  isOpen: boolean;
}

/**
 * NavLinkItem Component
 * - Handles individual menu item links
 * - Supports underline animation and active highlighting
 */
export const NavLinkItem: React.FC<NavLinkItemProps> = ({ item, isOpen }) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;

  const commonClasses = `
    relative px-4 py-2 text-sm font-medium transition-colors group
    ${isActive || isOpen ? "text-site-maroon" : "text-gray-700 hover:text-site-maroon"}
  `;

  const underlineClasses = `
    absolute bottom-0 left-0 h-[2px] w-full bg-site-maroon transition-transform duration-300
    ${isActive || isOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-75"}
  `;

  const ChevronIcon = item.hasDropdown ? (
    <ChevronDown
      size={16}
      className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
    />
  ) : null;

  return (
    <div className="relative h-full flex items-center">
      {item.path ? (
        <Link to={item.path} className={commonClasses}>
          <span className="flex items-center space-x-1">
            <span>{item.name}</span>
            {ChevronIcon}
          </span>
          <span className={underlineClasses}>&nbsp;</span>
        </Link>
      ) : (
        <button className={commonClasses}>
          <span className="flex items-center space-x-1">
            <span>{item.name}</span>
            {ChevronIcon}
          </span>
          <span className={underlineClasses}>&nbsp;</span>
        </button>
      )}
    </div>
  );
};
