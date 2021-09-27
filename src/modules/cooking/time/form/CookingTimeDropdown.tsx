import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import React from "react";
import {CookTimeMod} from "modules/cooking/time/cookingTimeMods";

interface Props {
  categoryName: string;
  categoryValues: {[k: string]: number};
  getDropdownValue: (key: CookTimeMod) => string;
  setDropdownValue: (key: CookTimeMod, value: string) => void;
}

const CookingTimeDropdown = ({
  categoryName,
  categoryValues,
  getDropdownValue,
  setDropdownValue
}: Props) => {
  return (
    <FormControl key={categoryName}>
      <InputLabel id={categoryName} color="primary">
        {categoryName}
      </InputLabel>
      <Select
        labelId={categoryName}
        value={getDropdownValue(categoryName)}
        color="primary"
        onChange={(e) => {
          setDropdownValue(categoryName, e.target.value);
        }}
        name={categoryName}
      >
        {Object.entries(categoryValues).map(([name, value]) => (
          <MenuItem key={name} value={name}>
            {`${name} (${value} sec)`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CookingTimeDropdown;
