import React from "react";
import { FindProfessionalFilterTypes } from "../SubElementType/FindProfessionalFiltersTypes";

const FindProfessionalFilters = ({
  icon,
  onClick,
  title,
  reversed = false,
  className,
  classNameItem,
}: FindProfessionalFilterTypes) => {
  return (
    <div
      className={
        `flex items-center justify-center border border-secondary-light rounded min-h-[45px] px-3 ` +
        className
      }
      onClick={onClick}
    >
      <div
        className={
          ` flex items-center gap-2 font-mulish font-medium text-sm cursor-pointer ${
            reversed ? `flex-row-reverse ` : "flex-row "
          }` + classNameItem
        }
      >
        <span>{title}</span>
        {icon && icon}
      </div>
    </div>
  );
};

export default FindProfessionalFilters;
