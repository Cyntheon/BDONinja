import {Autocomplete, TextField} from "@mui/material";
import React, {useMemo, useState} from "react";
import {CookTimeMod} from "modules/cooking/time/cookingTimeMods";

interface Props {
  categoryName: string;
  categoryValues: {[k: string]: number};
  getDropdownValue: (key: CookTimeMod) => string | null;
  setDropdownValue: (key: CookTimeMod, value: string | null) => void;
}

const CookingTimeDropdown = ({
  categoryName,
  categoryValues,
  getDropdownValue,
  setDropdownValue
}: Props) => {
  const [inputValue, setInputValue] = useState("");

  const options = useMemo(() => {
    return Object.entries(categoryValues).map(
      ([name, value]) => `${name} (${value > 0 ? "+" : ""}${value} sec)`
    );
  }, [categoryValues]);

  return (
    <Autocomplete
      disablePortal
      clearOnEscape
      openOnFocus
      size="small"
      options={options}
      value={
        options.find((option) => {
          const value = getDropdownValue(categoryName);

          if (!value) {
            return false;
          }

          return option.startsWith(value);
        }) || null
      }
      onChange={(e, value) => {
        const valueWithoutTime = value
          ? value.substr(0, / \(([^)]*)\)[^(]*$/.exec(value)?.index)
          : null;
        setDropdownValue(categoryName, valueWithoutTime);
      }}
      inputValue={inputValue}
      onInputChange={(e, value) => {
        setInputValue(value);
      }}
      renderInput={(params) => <TextField {...params} label={categoryName} />}
    />
  );
};

export default CookingTimeDropdown;
