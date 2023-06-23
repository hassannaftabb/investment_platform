import React from "react";
import { ButtonPropsType } from "./types";

const Button = ({ title, className, onClick, icon }: ButtonPropsType) => {
  return (
    <div
      className={
        "py-3 bg-primary rounded-[7px] text-secondary-bright w-full sm:w-[] flex items-center justify-center cursor-pointer hover:shadow-2xl shadow-secondary-dark font-poppins text-sm border border-primary " +
        className
      }
      onClick={onClick}
    >
      {icon && icon}
      {title}
    </div>
  );
};

export default Button;
