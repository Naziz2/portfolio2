import { useEffect, useState } from 'react';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add global styles to ensure cursor stays consistent
    const style = document.createElement('style');
    style.textContent = `
      * {
        cursor: none !important;
      }
      a, button, [role="button"], input, textarea, select, [tabindex] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.head.removeChild(style);
    };
  }, [isVisible]);

  return (
    <div 
      className={`fixed w-6 h-6 bg-blue-400 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 mix-blend-multiply transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: 'transform 0.1s ease-out',
        zIndex: 9999,
        pointerEvents: 'none',
        willChange: 'transform'
      }}
    />
  );
};

export default CursorFollower;
