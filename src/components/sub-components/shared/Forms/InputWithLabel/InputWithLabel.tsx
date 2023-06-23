import React from "react";
import TextField from "@mui/material/TextField";
import { InputWithLabelPropsType } from "./types";

const InputWithLabel = ({
  value,
  variant = "outlined",
  id,
  name,
  type = "text",
  required = false,
  inputProps,
  placeholder,
  label,
  onChange,
}: InputWithLabelPropsType) => {
  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className='font-mulish leading-[17px] font-bold text-xs'
        >
          {label}
        </label>
      )}
      <TextField
        value={value}
        variant={variant}
        type={type}
        className='text-sm w-full'
        required={required}
        onChange={onChange}
        InputProps={inputProps}
        id={id}
        fullWidth
        name={name}
        placeholder={placeholder}
        key={id}
        sx={{
          "& input": {
            fontSize: "14px",
            padding: "11.5px 14px",
          },
          "& label.Mui-focused": {
            color: "#ED0641",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#ED0641",
          },
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "black",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ED0641",
            },
          },
        }}
      />
    </>
  );
};

export default InputWithLabel;
