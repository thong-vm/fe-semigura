import { useState } from "react";
import Chart from "../components/chart/chart";
function Sensor() {
  const [dataLineChart, setDataLineChart] = useState({
    day: [1, 2, 3, 5, 8, 10, 12, 15, 16],
    line: [
      {
        label: "Room Temperature",
        value: [2, 5.5, 8, 8.5, 1.5, 5, 5.5, 2, 8.5],
      },
      {
        label: "Product Temperature",
        value: [3, 5.5, 3, 8.5, 13.5, 5, 3, 5.5, 2],
      },
      {
        label: "Room Temperature",
        value: [9, 5.5, 2, 8.5, 5.5, 9, 3, 5.5, 2],
      },
      {
        label: "Room Temperature",
        value: [9, 5.5, 2, 0.5, 3.5, 2, 3, 5.5, 2],
      },
    ],
  });
  return (
    <div>
      <Chart dataLineChart={dataLineChart} />
    </div>
  );
}

export default Sensor;
