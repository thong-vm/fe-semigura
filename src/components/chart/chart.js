import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { ChartsReferenceLine } from "@mui/x-charts";

function Chart({ dataLineChart, standardLines }) {
  return (
    <LineChart
      xAxis={[{ data: dataLineChart.xAxisData }]}
      series={dataLineChart.line.map((x) => {
        return {
          data: x.value,
          valueFormatter: (value) => (value == null ? "NaN" : value.toString()),
          label: x.label,
          showMark: true,
        };
      })}
      height={200}
      margin={{ top: 50, bottom: 20 }}
      sx={{
        ".MuiMarkElement-root": {
          scale: "0.5",
          fill: "#fff",
          strokeWidth: 2,
        },
      }}
    >
      {standardLines &&
        standardLines.map((standardLine) => (
          <ChartsReferenceLine
            y={standardLine.value}
            label={standardLine.label}
            lineStyle={{ stroke: standardLine.color }}
          />
        ))}
    </LineChart>
  );
}

export default Chart;
