import React from "react";
import { parseVarriableToLabel } from "../../help/parseVarriableToLabel";

const DataTable = ({ data }) => {
  return (
    <div style={{ display: "flex" }}>
      <table>
        <tbody>
          {Object.keys(data[0]).map((name, index) => (
            <tr key={index}>
              <td
                style={{
                  position: "sticky",
                  top: 0,
                  backgroundColor: "white",
                  zIndex: 1,
                }}
              >
                {parseVarriableToLabel(name)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ overflowX: "auto", maxWidth: "100%" }}>
        <table>
          <tbody>
            {Object.keys(data[0]).map((name, index) => (
              <tr key={index}>
                {data.map((column) => (
                  <td key={column.id}>{column[name]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
