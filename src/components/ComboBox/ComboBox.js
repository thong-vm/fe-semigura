import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox({ id, dataSource, handleOutput }) {
  const [value, setValue] = React.useState(dataSource[0]);
  const [inputValue, setInputValue] = React.useState("");
  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        handleOutput(newValue);
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      id={id}
      options={dataSource}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField style={{ fontSize: "10"  }} {...params} />}
    />
  );
}
