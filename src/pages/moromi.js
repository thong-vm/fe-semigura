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
      <div style={{ display: "flex" }}>
        <table>
          <tbody>
            {Object.keys(data[0]).map((name, index) => {
              return (
                <tr key={index}>
                  <td
                    style={{
                      position: "sticky",
                      top: 0,
                      backgroundColor: "white",
                      zIndex: 1,
                    }}
                  >
                    {name}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div style={{ overflowX: "auto", maxWidth: "100%" }}>
          <table>
            <tbody>
              {Object.keys(data[0]).map((name, index) => {
                return (
                  <tr key={index}>
                    {data.map((column) => {
                      return <td>{column[name]}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Moromi;
