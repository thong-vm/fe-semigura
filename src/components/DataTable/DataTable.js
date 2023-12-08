import React, { useState } from "react";
import { parseVarriableToLabel } from "../../help/parseVarriableToLabel";
import { convertDateTime, convertTime } from "../../help/convertDateTime";

const DataTable = ({ data, handleEditRow }) => {
  const transformData = data.map((items) => {
    const dataTrans = {
      Day: convertDateTime(items.time),
      Time: convertTime(items.time),
      ...items,
    };
    return dataTrans;
  });

  const [editableData, setEditableData] = useState(transformData);
  const handleInputChange = (newValue, rowIndex, columnName) => {
    const newData = [...editableData];
    newData[rowIndex] = {
      ...newData[rowIndex],
      [columnName]: newValue,
    };
    setEditableData(newData);
  };
  return (
    <div style={{ display: "flex", minWidth:"100%", width:"600px"}}>
      <table>
        <tbody>
          {Object.keys(transformData[0]).map(
            (name, index) =>
              name !== "id" && name !== "day" && name !== "time" &&(
                <tr key={index}>
                  <td
                    style={{
                      position: "sticky",
                      backgroundColor: "white",
                      zIndex: 1,
                      minWidth: "10rem",
                    }}
                  >
                    {parseVarriableToLabel(name)}
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
      <div style={{ overflowX: "auto" }}    >
        <table border="0" cellSpacing="0.5" cellPadding="0">
          <tbody>
            {Object.keys(transformData[0]).map(
              (name, index) =>
                name !== "id" && name !== "day" && name !== "time" && (
                  <tr key={index}>
                    {editableData.map((column, rowIndex) => (
                      <td
                        style={{ minWidth: "5rem", border: "0.5px solid" }}
                        key={column.id}
                      >
                        <input
                          type="text"
                          style={{ border: "none", outline: "none" }}
                          value={column[name] ?? ""}
                          onChange={(e) => {
                            handleInputChange(e.target.value, rowIndex, name);
                            handleEditRow(column.id, name, e.target.value);
                          }}
                        />
                      </td>
                    ))}
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
