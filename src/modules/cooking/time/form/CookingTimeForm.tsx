import cookingTimeMods, {
  CookTimeMod
} from "modules/cooking/time/cookingTimeMods";
import isNumber from "utils/isNumber";
import React, {memo} from "react";
import CookingTimeCheckbox from "modules/cooking/time/form/CookingTimeCheckbox";
import CookingTimeDropdown from "modules/cooking/time/form/CookingTimeDropdown";
import {FormGroup} from "@mui/material";
import {css} from "@emotion/react";

interface Props {
  getChecked: (key: CookTimeMod) => boolean;
  toggleChecked: (key: CookTimeMod) => void;
  getDropdownValue: (key: CookTimeMod) => string;
  setDropdownValue: (key: CookTimeMod, value: string) => void;
}

const CookingTimeForm = ({
  getChecked,
  toggleChecked,
  getDropdownValue,
  setDropdownValue
}: Props) => {
  return (
    <FormGroup
      css={css`
        &.MuiFormGroup-root {
          gap: 1rem;
        }
      `}
    >
      {Object.entries(cookingTimeMods).map(([name, value]) => {
        return isNumber(value) ? (
          <CookingTimeCheckbox
            key={name}
            name={name}
            value={value as number}
            getChecked={getChecked}
            toggleChecked={toggleChecked}
          />
        ) : (
          <CookingTimeDropdown
            key={name}
            categoryName={name}
            categoryValues={value as {[k: string]: number}}
            getDropdownValue={getDropdownValue}
            setDropdownValue={setDropdownValue}
          />
        );
      })}
    </FormGroup>
  );
};

export default memo(CookingTimeForm);
