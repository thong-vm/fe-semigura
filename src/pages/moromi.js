import { useEffect, useState } from "react";
import Chart from "../components/chart/chart";
import { moromiMock } from "../mock/moromi";
import { parseToLineArray } from "../help/parseToLineArray";
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
  useEffect(() => {}, [data, numbersArray, dataLineChart]);
  return (
    <div>
      <Chart dataLineChart={dataLineChart} />
    </div>
  );
}

export default Moromi;
