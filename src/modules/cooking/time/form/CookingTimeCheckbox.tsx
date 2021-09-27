import {Checkbox, FormControlLabel} from "@mui/material";
import {CookTimeMod} from "modules/cooking/time/cookingTimeMods";
import React from "react";

interface Props {
  value: number;
  name: string;
  getChecked: (key: CookTimeMod) => boolean;
  toggleChecked: (key: CookTimeMod) => void;
}

const CookingTimeCheckbox = ({
  name,
  value,
  getChecked,
  toggleChecked
}: Props) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          color="primary"
          checked={getChecked(name as CookTimeMod)}
          onChange={() => {
            toggleChecked(name as CookTimeMod);
          }}
        />
      }
      label={`${name} (${value} sec)`}
      key={name}
    />
  );
};

export default CookingTimeCheckbox;
