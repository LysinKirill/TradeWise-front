import { useEffect } from 'react';

export const useScrollLock = (isLocked: boolean = true, element: HTMLElement = document.body) => {
  useEffect(() => {
    if (!isLocked) return;

    const { overflow: originOverflow, position: originPosition } = window.getComputedStyle(element);

    element.style.overflow = 'hidden';
    element.style.position = 'absolute';

    return () => {
      element.style.overflow = originOverflow;
      element.style.position = originPosition;
    };
  }, [element, isLocked]);
};
