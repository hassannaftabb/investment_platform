import React from "react";
import TextField from "@mui/material/TextField";
import { BasicInputPropsType } from "./types";

const BasicInput = ({
  label,
  value,
  variant = "standard",
  id,
  name,
  type = "text",
  required = false,
  multiline = false,
  rows = 1,
  inputProps,
  onChange,
}: BasicInputPropsType) => {
  return (
    <TextField
      label={label}
      value={value}
      variant={variant}
      type={type}
      className='text-sm w-full'
      required={required}
      onChange={onChange}
      multiline={multiline}
      rows={rows}
      InputProps={inputProps}
      id={id}
      name={name}
      key={id}
      autoComplete='off'
      sx={{
        "& label.Mui-focused": {
          color: "#ED0641",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "#ED0641",
        },
        "& label": {
          fontSize: "14px",
          lineHeight: "21px",
          fontFamily: "Poppins",
        },
        "& input": {
          fontSize: "14px",
        },
      }}
    />
  );
};

export default BasicInput;
