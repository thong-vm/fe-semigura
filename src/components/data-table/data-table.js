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
                  minWidth: "10rem",
                }}
              >
                {parseVarriableToLabel(name)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ overflowX: "auto", maxWidth: "100%" }}>
        <table border="0" cellspacing="0.5" cellpadding="0">
          <tbody>
            {Object.keys(data[0]).map((name, index) => (
              <tr key={index}>
                {data.map((column) => (
                  <td
                    style={{ minWidth: "5rem", border: "0.5px solid" }}
                    key={column.id}
                  >
                    <input
                      type="text"
                      style={{ border: "none", outline: "none" }}
                      value={column[name]}
                    />
                  </td>
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
