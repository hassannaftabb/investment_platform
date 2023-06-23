import React from "react";
import { ErrorTextPropTypes } from "./types";

const ErrorText = ({ text, className }: ErrorTextPropTypes) => {
  return <span className={`text-primary font-vold text-xs ` + className}>{text}</span>;
};

export default ErrorText;
