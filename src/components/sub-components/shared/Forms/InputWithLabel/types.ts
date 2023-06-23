import React from "react";

export type InputWithLabelPropsType = {
  value?: string;
  variant?: "standard" | "filled" | "outlined" | undefined;
  id: string;
  name: string;
  type?: string;
  required?: boolean;
  inputProps?: object;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
  placeholder?: string;
};
