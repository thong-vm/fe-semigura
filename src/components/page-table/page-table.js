import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { parseToLineArray } from "../../help/parseToLineArray";
import Chart from "../chart/chart";
import DataTable from "../data-table/data-table";

function PageTable({ selectAllData, updateData }) {
  const dispatch = useDispatch();
  const data = useSelector(selectAllData);
  const [chartData, setDataLineChart] = useState({
    xAxisData: [],
    line: parseToLineArray(data),
  });
  const handleEditRow = (id, name, value) => {
    var changes = {
      [name]: value && !isNaN(value) ? parseFloat(value) : value,
    };

    dispatch(updateData({ id, changes }));
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
  }, [data, dispatch]);
  return (
    <div>
      {chartData.xAxisData.length && <Chart dataLineChart={chartData} />}
      <DataTable data={data} handleEditRow={handleEditRow} />
    </div>
  );
}

export default PageTable;
