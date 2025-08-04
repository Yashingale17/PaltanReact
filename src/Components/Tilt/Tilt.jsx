import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const Tilt = ({ children }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 15, 
      speed: 400, 
      glare: false, 
      "max-glare": 0.5,
    });

    return () => tiltRef.current?.vanillaTilt?.destroy();
  }, []);

  return (
    <div ref={tiltRef} className="tilt-box">
      {children}
    </div>
  );
};

export default Tilt;
