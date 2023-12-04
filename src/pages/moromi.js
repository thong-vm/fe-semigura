import { useEffect, useState } from "react";
import Chart from "../components/chart/chart";
import { moromiMock } from "../mock/moromi";
import { parseToLineArray } from "../help/parseToLineArray";
import DataTable from "../components/data-table/data-table";
function Moromi() {
  const [data, setData] = useState(moromiMock);
  const [chartData, setDataLineChart] = useState({
    xAxisData: [],
    line: parseToLineArray(data),
  });
  const changeData = () => {
    setData([
      {
        id: 1,
        day: 1,
        time: "2022-12-01 05:00:00",
        roomTemperature: -2,
        productTemperature: 7,
        baume: 9,
        japanSakeLevel: 1,
        alcoholContent: null,
      },
      {
        id: 2,
        day: 2,
        time: "2022-12-01 05:00:00",
        roomTemperature: 5,
        productTemperature: 7.5,
        baume: 6.7,
        japanSakeLevel: null,
        alcoholContent: 2.8,
      },
    ]);
  };
  useEffect(() => {
    const xAxisData = Array.from(
      { length: data.length },
      (_, index) => index + 1
    );
    setDataLineChart({
      xAxisData: xAxisData,
      line: parseToLineArray(data),
    });
  }, [data]);
  return (
    <div>
      <button onClick={changeData}>change</button>
      {chartData.xAxisData.length && <Chart dataLineChart={chartData} />}
      <DataTable data={data} />
    </div>
  );
}

export default Moromi;
