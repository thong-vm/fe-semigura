import { useEffect, useState } from "react";
import Chart from "../components/chart/chart";
import { moromiMock } from "../mock/moromi";
import { parseToLineArray } from "../help/parseToLineArray";
import DataTable from "../components/data-table/data-table";
function Moromi() {
  const [data, setData] = useState(moromiMock);
  const numbersArray = Array.from(
    { length: data.length },
    (_, index) => index + 1
  );
  const [dataLineChart, setDataLineChart] = useState({
    day: numbersArray,
    line: parseToLineArray(data),
  });
  useEffect(() => {
    console.log("dataLineChart :", dataLineChart);
    console.log("numbersArray :", numbersArray);
  }, [data, numbersArray, dataLineChart]);
  return (
    <div>
      <button
        onClick={() => {
          setData([
            {
              id: 1,
              day: 1,
              time: "2022-12-01 05:00:00",
              roomTemperature: null,
              productTemperature: 7,
              baume: null,
              japanSakeLevel: null,
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
        }}
      >
        change
      </button>
      <Chart dataLineChart={dataLineChart} />
      <DataTable data={data} />
    </div>
  );
}

export default Moromi;
