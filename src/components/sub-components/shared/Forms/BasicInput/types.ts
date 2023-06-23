import React from "react";

export type BasicInputPropsType = {
  label: string;
  value?: string;
  variant?: "standard" | "filled" | "outlined" | undefined;
  id: string;
  name: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  rows?:number;
  inputProps?: object;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
