'use client';
import React, { useEffect, useRef } from 'react';

const AnimateComponent = ({children}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const elementObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const entrySquare = entry.target.querySelector('.animate-block');
  
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entrySquare.classList.add('activate');
        } else {
          // Раскомментируйте эту строку, если хотите удалить класс при отсутствии пересечения
          // entrySquare.classList.remove('activate');
        }
      });
    });
  
    elementObserver.observe(elementRef.current);
  
    // Отключение наблюдателя при размонтировании компонента
    return () => {
      elementObserver.disconnect();
    };
  }, []);

  return (
    <div ref={elementRef}>
        <div className='animate-block'>
            {children}  
        </div>
    </div>
  );
};

export default AnimateComponent;