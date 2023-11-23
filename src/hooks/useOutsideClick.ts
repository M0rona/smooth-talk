import { RefObject, useEffect } from 'react';

export const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const handleClick = (e:MouseEvent) => {
      if (ref?.current && !ref.current.parentNode?.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
}