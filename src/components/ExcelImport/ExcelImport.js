import React, { useState } from "react";
import readXlsxFile from "read-excel-file";

const ExcelImport = () => {
  const [excelData, setExcelData] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    try {
      const data = await readXlsxFile(file);
      setExcelData(data);
    } catch (error) {
      console.error("Error reading Excel file:", error);
    }
  };

  return (
    <div style={{ height: "350px", minHeight: "100%", overflowY: "auto" }}>
      {!excelData ? (
        <input type="file" onChange={handleFileChange} />
      ) : (
        <table>
          <thead>
            <tr>
              {excelData[0].map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {excelData.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExcelImport;
