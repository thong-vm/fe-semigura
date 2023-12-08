import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { ChartsReferenceLine, ChartsXAxis, ChartsYAxis } from "@mui/x-charts";

function Chart({ dataLineChart, standardLines, axis }) {
  return (
    <LineChart
      xAxis={[{ scaleType: "point", data: dataLineChart.xAxisData }]}
      series={dataLineChart.line.map((x) => {
        return {
          data: x.value,
          valueFormatter: (value) => (value == null ? "NaN" : value.toString()),
          label: x.label,
          showMark: true,
          connectNulls: true,
          disableHighlight: true,
        };
      })}
      height={200}
      margin={{ top: 50, bottom: 50 }}
      sx={{
        ".MuiMarkElement-root": {
          scale: "0",
          fill: "#fff",
          strokeWidth: 2,
        },
      }}
    >
      <ChartsXAxis label={axis?.x} />
      <ChartsYAxis label={axis?.y} />
      {standardLines &&
        standardLines.map((standardLine, index) => (
          <ChartsReferenceLine
            key={index}
            y={standardLine.value}
            label={standardLine.label}
            lineStyle={{ stroke: standardLine.color }}
            showMark={true}
          />
        ))}
    </LineChart>
  );
}

export default Chart;
