
import React, { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';






function ConfettiComponent() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleResize = () => {
  
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleStartConfetti = () => {
    setShowConfetti(!showConfetti);
    setTimeout(() => {
      setShowConfetti(false);
    }, 4000);
  };

  return (
    <div>
      <h1>Happy birthday Navya...........</h1>
      <button onClick={handleStartConfetti}>Start Confetti</button>
      {showConfetti && <ReactConfetti width={windowSize.width} height={windowSize.height} />}
    </div>
  );
}

export default ConfettiComponent;
