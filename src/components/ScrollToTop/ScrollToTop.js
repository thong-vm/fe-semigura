import React, { useState, useEffect } from "react";
import classes from "./ScrollToTop.module.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Button } from "@mui/material";
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
    <>
      {isVisible && (
        <div className={classes.scrollBtn}>
          <Button
            sx={{ borderRadius: "100%", minHeight: "50px", minWidth: "50px" }}
            onClick={scrollToTop}
            variant="contained"
          >
            <ArrowUpwardIcon sx={{ width: "20px", height: "20px" }} />
          </Button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
