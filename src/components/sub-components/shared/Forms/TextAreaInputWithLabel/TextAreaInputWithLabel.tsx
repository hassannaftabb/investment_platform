import React from "react";
import Textarea from "@mui/joy/Textarea";
import { InputWithLabelPropsType } from "./types";

const TextAreaInputWithLabel = ({
  label,
  id,
  placeholder,
  name,
  onChange,
  value,
  minRows,
}: InputWithLabelPropsType) => {
  return (
    <>
      <label
        htmlFor={id}
        className='font-mulish leading-[17px] font-bold text-xs'
      >
        {label}
      </label>
      <Textarea
        placeholder={placeholder}
        minRows={minRows}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default TextAreaInputWithLabel;
