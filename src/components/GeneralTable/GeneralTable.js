import React from "react";
import classes from "./GeneralTable.module.css";

function GeneralTable({ data }) {
  if (!data || data.length === 0) {
    return <div>No valid data available</div>;
  }
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
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, cellIndex) => (
                <td key={cellIndex}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GeneralTable;
