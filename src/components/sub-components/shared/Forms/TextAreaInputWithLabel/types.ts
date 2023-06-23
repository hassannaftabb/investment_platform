import React from "react";

export type InputWithLabelPropsType = {
  id: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  label?: string;
  placeholder?: string;
  value: string;
  minRows: number;
};
