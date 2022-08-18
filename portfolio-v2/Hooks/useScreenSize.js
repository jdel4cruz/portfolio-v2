import { useState, useEffect } from "react";

import React from "react";

function useScreenSize() {
  const [screenSize, setScreenSize] = useState([0, 0]);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize([window.innerWidth, window.innerHeight]);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
}

export default useScreenSize;
