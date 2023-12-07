import React, { useState, useEffect } from "react";
import * as COLORS from "../../constants/colors";
const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Chạy useEffect khi component được mount

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  return (
    <p
      style={{
        margin: "0px 5px 0px 5px",
        padding: "0px 2px 0px 2px",
        border: "0.5px solid",
        width: "70px",
        textAlign: "center",
        color: COLORS.textAccent,
      }}
    >{`${hours}:${minutes}:${seconds}`}</p>
  );
};

export default Clock;
