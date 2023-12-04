import { useState } from "react";
import Chart from "../components/chart/chart";
import { moromiMock } from "../mock/moromi";
import { parseToLineArray } from "../help/parseToLineArray";
function Moromi() {
  const numbersArray = Array.from(
    { length: moromiMock.length },
    (_, index) => index + 1
  );
  const [dataLineChart, setDataLineChart] = useState({
    day: numbersArray,
    line: parseToLineArray(moromiMock),
  });
  return (
    <div>
      <Chart dataLineChart={dataLineChart} />
    </div>
  );
}

export default Moromi;
