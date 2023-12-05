import { parseToLineArray } from "../../help/parseToLineArray";
import Chart from "../chart/chart";
import DataTable from "../data-table/data-table";

function PageTable({ data, standardLines, updateData }) {
  const xAxisData = Array.from(
    { length: data.length },
    (_, index) => index + 1
  );
  const chartData = {
    xAxisData: xAxisData,
    line: parseToLineArray(data),
  };
  const handleEditRow = (id, name, value) => {
    var changes = {
      [name]: value && !isNaN(value) ? parseFloat(value) : value,
    };
    updateData({ id, changes });
  };

  return (
    <div>
      {xAxisData.length && (
        <Chart dataLineChart={chartData} standardLines={standardLines} />
      )}
      <DataTable data={data} handleEditRow={handleEditRow} />
    </div>
  );
}

export default PageTable;
