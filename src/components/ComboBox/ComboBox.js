import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox({ id, dataSource }) {
  const [value, setValue] = React.useState(dataSource[0]);
  const [inputValue, setInputValue] = React.useState("");
  return (
    // <Autocomplete
    //   style={{ margin: "1px" }}
    //   disablePortal
    //   id={id}
    //   value={dataSource}
    //   options={dataSource}
    //   sx={{ width: 200 }}
    //   renderInput={(params) => (
    //     <TextField {...params} label={label} />
    //   )}

    // />
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      id="controllable-states-demo"
      options={dataSource}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}
