import { ChangeEvent } from "react";

export type CheckBoxPropTypes = {
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
};
