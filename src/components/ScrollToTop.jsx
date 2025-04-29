import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showScroll && (
      <button
        onClick={scrollToTop}
        className="btn btn-primary rounded-circle position-fixed bottom-0 end-0 m-3"
        style={{
          width: '60px', // slightly bigger size for better visibility
          height: '60px',
          fontSize: '24px', // larger icon
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // subtle shadow effect
          transition: 'transform 0.3s ease', // smooth transition on hover
        }}
        aria-label="Scroll to top"
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} // hover effect
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
