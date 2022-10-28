import { useEffect } from 'react';

export const useOutsideClickDetector = function (ref, handlerFunction) {
  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        handlerFunction();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, handlerFunction]);
};
