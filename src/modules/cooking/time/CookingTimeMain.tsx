import React, {useCallback, useState} from "react";
import cookingTimeMods, {
  CookTimeMod
} from "modules/cooking/time/cookingTimeMods";
import {objectMap, objectReduce, objectTrim} from "utils/objectUtils";
import {roundToNthDecimalPlace} from "utils/numberUtils";
import isNumber from "utils/isNumber";
import isObject from "utils/isObject";
import PageSubHeading from "app/page/PageSubHeading";
import Highlight from "components/Highlight";
import CookingTimeForm from "modules/cooking/time/form/CookingTimeForm";

const baseCheckboxState = objectTrim(
  objectMap(
    cookingTimeMods,
    (value) => (isNumber(value) ? false : undefined) as boolean
  )
);

const baseDropdownState = objectTrim(
  objectMap(
    cookingTimeMods,
    (value) => (isObject(value) ? "" : undefined) as string
  )
);

const CookingTimeMain = () => {
  const [checkboxState, setCheckboxState] =
    useState<{[s in CookTimeMod]: boolean}>(baseCheckboxState);

  const [dropdownState, setDropdownState] =
    useState<{[s in CookTimeMod]: string}>(baseDropdownState);

  const getChecked = useCallback(
    (key: CookTimeMod) => checkboxState[key],
    [checkboxState]
  );

  const toggleChecked = useCallback(
    (key: CookTimeMod) => {
      setCheckboxState((oldState) => ({
        ...oldState,
        [key]: !oldState[key]
      }));
    },
    [setCheckboxState]
  );

  const getDropdownValue = useCallback(
    (key: CookTimeMod) => dropdownState[key],
    [dropdownState]
  );

  const setDropdownValue = useCallback(
    (key: CookTimeMod, value: string) => {
      setDropdownState((oldState) => ({
        ...oldState,
        [key]: value
      }));
    },
    [setDropdownState]
  );

  const getTime = useCallback(() => {
    const baseTime = 10;

    const checkboxTimeMod = objectReduce(
      checkboxState,
      (accumulator, value, key) =>
        accumulator + (value ? (cookingTimeMods[key] as number) : 0),
      0
    );

    const dropdownTimeMod = objectReduce(
      dropdownState,
      (accumulator, value, key) =>
        accumulator +
        ((cookingTimeMods[key] as {[k: string]: number})[value] || 0),
      0
    );

    const timeMod = checkboxTimeMod + dropdownTimeMod;

    const time = Math.max(1, baseTime + timeMod);

    return roundToNthDecimalPlace(time, 1);
  }, [checkboxState, dropdownState]);

  return (
    <>
      <PageSubHeading>
        Cooking Time:
        <Highlight>{` ${getTime()} `}</Highlight>
        second{getTime() !== 1 ? "s" : ""}
      </PageSubHeading>
      <CookingTimeForm
        getChecked={getChecked}
        toggleChecked={toggleChecked}
        getDropdownValue={getDropdownValue}
        setDropdownValue={setDropdownValue}
      />
    </>
  );
};

export default CookingTimeMain;
