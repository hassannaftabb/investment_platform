import { FormControlLabel, FormGroup } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { CheckBoxPropTypes } from "./types";

const CustomCheckbox = ({ label, onChange }: CheckBoxPropTypes) => {
  return (
    <FormGroup>
      <FormControlLabel
        className="text-secondary-light font-poppins text-xs"
        sx={{
          "& .MuiTypography-root": {
            fontSize: "12px",
            fontFamily: "Poppins",
          },
        }}
        control={
          <Checkbox
            onChange={(e) => onChange(e, e.target.checked)}
            sx={{
              color: "blue",
              "&.Mui-checked": {
                color: "green",
              },
            }}
          />
        }
        label={label}
      />
    </FormGroup>
  );
};

export default CustomCheckbox;
