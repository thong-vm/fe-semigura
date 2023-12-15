import { Button } from "@mui/material";
import { parseToLineArray } from "../../help/parseToLineArray";
import Chart from "../Chart/Chart";
import DataTable from "../DataTable/DataTable";

function PageTable({
  data,
  yAxisName,
  standardLines,
  axis,
  updateData,
  disableSave,
}) {
  const xAxisData = Array.from({ length: data.length }, (_, index) => {
    return yAxisName ? data[index][yAxisName] : index + 1;
  });
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
    <>
      {xAxisData.length && (
        <Chart
          dataLineChart={chartData}
          standardLines={standardLines}
          axis={axis}
        />
      )}
      <DataTable data={data} handleEditRow={handleEditRow} />
      <div
        style={{
          width: "100%",
          marginTop: "1%",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <div style={{ "margin-right": "1%" }}>
          <Button variant="contained" size="small">
            Cancel
          </Button>
        </div>
        <div style={{ "margin-right": "1%" }}>
          <Button variant="contained" size="small" disabled={disableSave}>
            Save
          </Button>
        </div>
      </div>
    </>
  );
}

export default PageTable;
