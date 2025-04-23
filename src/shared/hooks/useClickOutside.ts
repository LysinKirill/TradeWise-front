import { useRef, useEffect } from 'react';

export const useClickOutside = <T = HTMLDivElement>(callback?: (event: Event) => void) => {
  const ref = useRef<T>(null);

  const handleClick = (event: Event) => {
    // @ts-ignore
    if (!ref.current || ref.current?.contains(event.target)) {
      return;
    }

    if (callback) {
      callback(event);
    }
  };

  useEffect(() => {
    document.body.addEventListener('mousedown', handleClick);
    document.body.addEventListener('touchstart', handleClick);

    return () => {
      document.body.removeEventListener('mousedown', handleClick);
      document.body.removeEventListener('touchstart', handleClick);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { ref };
};
