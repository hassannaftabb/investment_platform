import { ReactElement } from "react";

export type ButtonPropsType = {
  title: string;
  className?: string;
  onClick: any;
  icon?:ReactElement;
};
