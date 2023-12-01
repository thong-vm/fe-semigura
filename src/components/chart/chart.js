import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

function Chart({ dataLineChart }) {
  return (
    <LineChart
      xAxis={[{ data: dataLineChart.day }]}
      series={dataLineChart.line.map((x) => {
        return {
          data: x.value,
          valueFormatter: (value) => (value == null ? "NaN" : value.toString()),
          label: x.label,
          showMark: true,
        };
      })}
      height={200}
      margin={{ top: 10, bottom: 20 }}
    />
  );
}

export default Chart;
