import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography
} from "@material-ui/core";
import {useCallback, useMemo, useState} from "react";

const timeReducers: {
  [k: string]: {
    reduction: number;
    category?: string;
  }
} = {
  ["Advanced Cooking Utensil"]: {
    reduction: 1
  },
  ["Silver Embroidered Cook's Clothes"]: {
    reduction: 1,
    category: "Clothes"
  },
  ["+1 Silver Embroidered Cook's Clothes"]: {
    reduction: 2,
    category: "Clothes"
  },
  ["+2 Silver Embroidered Cook's Clothes"]: {
    reduction: 3,
    category: "Clothes"
  },
  ["+3 Silver Embroidered Cook's Clothes"]: {
    reduction: 4,
    category: "Clothes"
  },
  ["+4 Silver Embroidered Cook's Clothes"]: {
    reduction: 5,
    category: "Clothes"
  }
};

const baseState = Object.keys(timeReducers).reduce(
  (accumulator, value) => ({
    ...accumulator,
    [value]: false
  }),
  {}
);

type TimeReducer = keyof typeof timeReducers;

const CookTime = () => {
  const [checkboxState, setCheckboxState] =
    useState<{[s in TimeReducer]: boolean}>(baseState as never);

  const getChecked = useCallback((key: TimeReducer) => {
    return checkboxState[key];
  }, [checkboxState]);

  const toggleChecked = useCallback((key: TimeReducer) => {
    const keyCategory = timeReducers[key].category;

    setCheckboxState((oldState) => {
      return Object.entries(oldState).reduce(
        (accumulator, [entryKey, entryVal]) => {
          if (entryKey === key) {
            return {...accumulator, [entryKey]: !entryVal};
          }

          const entryCategory = timeReducers[entryKey as TimeReducer].category;
          if (keyCategory && keyCategory === entryCategory) {
            return {...accumulator, [entryKey]: false};
          }

          return {...accumulator, [entryKey]: entryVal};
        },
        {}
      );
    });
  }, []);

  const getTime = useCallback(() => {
    const totalReduction = Object.entries(timeReducers).reduce(
      (accumulator, [k, v]) => {
        return accumulator + (checkboxState[k] ? v.reduction : 0);
      },
      0
    );

    return Math.max(1, 10 - totalReduction);
  }, [checkboxState]);

  const checklist = useMemo(() => (
    Object.entries(timeReducers).map(([k, v]) => (
      <FormControlLabel
        control={(
          <Checkbox
            color="secondary"
            checked={!!getChecked(k as TimeReducer)}
            onChange={() => toggleChecked(k as TimeReducer)}
          />
        )}
        label={`${k} (-${v.reduction} sec)`}
        key={k}
      />
    ))
  ), [getChecked, toggleChecked]);

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h3">
        Cooking Time: {getTime()} seconds
      </Typography>
      <FormGroup>
        {checklist}
      </FormGroup>
    </Box>
  );
};

export default CookTime;
