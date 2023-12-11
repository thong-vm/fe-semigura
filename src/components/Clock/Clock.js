import React, { useState, useEffect } from "react";
import classes from "./Clock.module.css";
function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  return <p className={classes.clock}>{`${hours}:${minutes}:${seconds}`}</p>;
}

export default Clock;
