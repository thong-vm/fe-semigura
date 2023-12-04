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
  const handleEditRow = (rowIndex, id, name, value) => {
    const newData = [...data];
    newData[rowIndex] = {
      ...newData[rowIndex],
      [name]: value && !isNaN(value) ? parseFloat(value) : value,
    };
    setData(newData);
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
      {chartData.xAxisData.length && <Chart dataLineChart={chartData} />}
      <DataTable data={data} handleEditRow={handleEditRow} />
    </div>
  );
}

export default Moromi;
