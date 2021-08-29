import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from "@material-ui/core";
import {useCallback, useMemo, useState} from "react";

const isNumber = (k: unknown) => {
  return typeof k === "number";
};

const isObject = (k: unknown) => {
  return typeof k === "object";
};

const cookTimeModifiers: {
  [k: string]: number | {[k: string]: number}
} = {
  ["Clothes"]: {
    ["None"]: 0,
    ["Silver Embroidered Cook's Clothes"]: -1,
    ["+1 Silver Embroidered Cook's Clothes"]: -2,
    ["+2 Silver Embroidered Cook's Clothes"]: -3,
    ["+3 Silver Embroidered Cook's Clothes"]: -4,
    ["+4 Silver Embroidered Cook's Clothes"]: -5,
    ["+5 Silver Embroidered Cook's Clothes"]: -7
  },
  ["Alchemy Stone"]: {
    ["None"]: 0,
    ["Imperfect Alchemy Stone of Life"]: -0.5,
    ["Rough Alchemy Stone of Life"]: -0.7,
    ["Polished Alchemy Stone of Life"]: -0.9,
    ["Sturdy Alchemy Stone of Life"]: -1.1,
    ["Sharp Alchemy Stone of Life"]: -1.4,
    ["Resplendent Alchemy Stone of Life"]: -1.7,
    ["Splendid Alchemy Stone of Life"]: -2,
    ["Khan's Heart: Life"]: -1.3,
    ["Life Spirit Stone"]: -1.1
  },
  ["Utensil"]: {
    ["None"]: 0,
    ["Intermediate Cooking Utensil"]: 0,
    ["Advanced Cooking Utensil"]: -1,
    ["Serendia Traditional Cooking Utensil"]: +6,
    ["Calpheon Traditional Cooking Utensil"]: +7
  },
  ["Canape Outfit"]: -2,
  ["Simple Cron Meal"]: -0.6
};

const baseCheckboxState = Object.entries(cookTimeModifiers).reduce(
  (accumulator, [k, v]) => ({
    ...accumulator,
    [k]: isNumber(v) ? false : undefined
  }),
  {}
);

const baseDropdownState = Object.entries(cookTimeModifiers).reduce(
  (accumulator, [k, v]) => ({
    ...accumulator,
    [k]: isObject(v) ? "" : undefined
  }),
  {}
);

type CookTimeModifier = keyof typeof cookTimeModifiers;

const CookTime = () => {
  const [checkboxState, setCheckboxState] =
    useState<{[s in CookTimeModifier]: boolean}>(baseCheckboxState);

  const [dropdownState, setDropdownState] =
    useState<{[s in CookTimeModifier]: string}>(baseDropdownState);

  const getChecked = useCallback((key: CookTimeModifier) => (
    checkboxState[key]
  ), [checkboxState]);

  const toggleChecked = useCallback((key: CookTimeModifier) => {
    setCheckboxState((oldState) => ({
      ...oldState,
      [key]: !oldState[key]
    }));
  }, [setCheckboxState]);

  const getDropdownValue = useCallback((key: CookTimeModifier) => (
    dropdownState[key]
  ), [dropdownState]);

  const setDropdownValue = useCallback((key: CookTimeModifier, val: string) => {
    setDropdownState((oldState) => ({
      ...oldState,
      [key]: val
    }));
  }, [setDropdownState]);

  const getTime = useCallback(() => {
    const timeMod =
      Object.entries(checkboxState).reduce(
        (accumulator, [k, v]) => (
          accumulator + (v ? cookTimeModifiers[k] as number : 0)
        ),
        0
      ) + Object.entries(dropdownState).reduce(
        (accumulator, [k, v]) => {
          console.log(k, (cookTimeModifiers[k] as {[k: string]: number})[v]);
          return (
            accumulator + (
              (cookTimeModifiers[k] as {[k: string]: number})[v] || 0
            )
          );
        },
        0
      );

    return Math.round(Math.max(1, 10 + timeMod) * 10) / 10;
  }, [checkboxState, dropdownState]);

  const checklist = useMemo(() => (
    Object.entries(cookTimeModifiers).map(([topLevelKey, topLevelVal]) => (
      isNumber(topLevelVal) ? (
        <FormControlLabel
          control={(
            <Checkbox
              color="secondary"
              // Coerce to boolean
              checked={!!getChecked(topLevelKey as CookTimeModifier)}
              onChange={() => toggleChecked(topLevelKey as CookTimeModifier)}
            />
          )}
          label={`${topLevelKey} (${topLevelVal} sec)`}
          key={topLevelKey}
        />
      ) : (
        <FormControl key={topLevelKey}>
          <InputLabel id={topLevelKey}>
            {topLevelKey}
          </InputLabel>
          <Select
            labelId={topLevelKey}
            value={getDropdownValue(topLevelKey)}
            color="secondary"
            onChange={(e) => {
              setDropdownValue(topLevelKey, e.target.value as string);
            }}
            name={topLevelKey}
          >
            {Object.entries(topLevelVal).map(([subLevelKey, subLevelVal]) => (
              <MenuItem
                value={subLevelKey}
                key={subLevelKey}
              >
                {`${subLevelKey} (${subLevelVal} sec)`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )
    ))
  ), [getChecked, toggleChecked, getDropdownValue, setDropdownValue]);

  return (
    <>
      <Typography variant="h3">
        Cooking Time: {getTime()} second{getTime() !== 1 ? "s" : ""}
      </Typography>
      <FormGroup>
        {checklist}
      </FormGroup>
    </>
  );
};

export default CookTime;