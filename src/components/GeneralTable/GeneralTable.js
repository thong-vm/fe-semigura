import React, { useState } from "react";
import classes from "./GeneralTable.module.css";

function GeneralTable({ data, editAble, handleEditData }) {
  const [tableData, setEditableData] = useState(data);
  const handleInputChange = (newValue, rowIndex, columnName) => {
    const newData = [...tableData];
    newData[rowIndex] = {
      ...newData[rowIndex],
      [columnName]: newValue,
    };
    setEditableData(newData);
  };
  const handleEditRow = (rowIndex, name, value) => {
    handleEditData(rowIndex, name, value);
  };
  const headers = Object.keys(data[0]);
  return (
    <div className={classes.container}>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {headers.map((name, cellIndex) => (
                <td key={cellIndex}>
                  <input
                    readOnly={!editAble}
                    type="text"
                    style={{ border: "none", outline: "none" }}
                    value={row[name] ?? ""}
                    onChange={(e) => {
                      handleInputChange(e.target.value, index, name);
                      handleEditRow(index, name, e.target.value);
                    }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GeneralTable;
