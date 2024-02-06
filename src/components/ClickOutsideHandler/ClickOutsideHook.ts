import React from 'react';
import { useEffect, useState } from 'react';

export const useClickOutside = (onClickOutside?: ()=>void) => {

  const ref = React.useRef<HTMLDivElement>(null);
  const [internalClick, setInternalClick] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current && 
        !ref.current.contains(event.target as Node) && 
        !internalClick 
      ) {
        onClickOutside && onClickOutside();
      }
      setInternalClick(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClickOutside, internalClick]);

  const handleInternalClick = () => {
    setInternalClick(true);
  };

  return { ref, handleInternalClick };
};