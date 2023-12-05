import React, { useState } from "react";
import { parseVarriableToLabel } from "../../help/parseVarriableToLabel";

const DataTable = ({ data, handleEditRow }) => {
  const [editableData, setEditableData] = useState(data);
  const handleInputChange = (newValue, rowIndex, columnName) => {
    const newData = [...editableData];
    newData[rowIndex] = {
      ...newData[rowIndex],
      [columnName]: newValue,
    };
    setEditableData(newData);
  };
  return (
    <div style={{ display: "flex" }}>
      <table>
        <tbody>
          {Object.keys(data[0]).map(
            (name, index) =>
              name !== "id" && (
                <tr key={index}>
                  <td
                    style={{
                      position: "sticky",
                      top: 0,
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
      <div style={{ overflowX: "auto", maxWidth: "100%" }}>
        <table border="0" cellSpacing="0.5" cellPadding="0">
          <tbody>
            {Object.keys(data[0]).map(
              (name, index) =>
                name !== "id" && (
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
