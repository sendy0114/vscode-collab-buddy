import { useState, useRef, useCallback } from 'react';

interface UseMegaMenuHoverProps {
  openDelay?: number;
  closeDelay?: number;
}

export const useMegaMenuHover = ({ 
  openDelay = 200, 
  closeDelay = 200 
}: UseMegaMenuHoverProps = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback(() => {
    // Clear any pending close operation
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    // Set timeout to open after delay
    if (!isOpen) {
      openTimeoutRef.current = setTimeout(() => {
        setIsOpen(true);
      }, openDelay);
    }
  }, [isOpen, openDelay]);

  const handleMouseLeave = useCallback(() => {
    // Clear any pending open operation
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }

    // Set timeout to close after delay
    if (isOpen) {
      closeTimeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, closeDelay);
    }
  }, [isOpen, closeDelay]);

  const forceClose = useCallback(() => {
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
    }
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    handleMouseEnter,
    handleMouseLeave,
    forceClose,
  };
};