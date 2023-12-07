import React, { useState, useEffect } from "react";
import classes from "./ScrollToTop.module.css";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button className={classes.scrollBtn} onClick={scrollToTop}>
          <ArrowUpwardIcon/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
