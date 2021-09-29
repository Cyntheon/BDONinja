import {roundToNthDecimalPlace} from "utils/numberUtils";

interface BasicRow {
  min: number;
  bonusAp: number;
  important: boolean;
  veryImportant: boolean;
}

const createBasicData = (
  min: number,
  bonusAp: number,
  important = false,
  veryImportant = false
): BasicRow => {
  return {min, bonusAp, important, veryImportant};
};

const basicRows = [
  createBasicData(0, 0),
  createBasicData(100, 5),
  createBasicData(140, 10),
  createBasicData(170, 15),
  createBasicData(184, 20),
  createBasicData(209, 30),
  createBasicData(235, 40),
  createBasicData(245, 48),
  createBasicData(249, 57, true),
  createBasicData(253, 69, true),
  createBasicData(257, 83, true, true),
  createBasicData(261, 101, true, true),
  createBasicData(265, 122, true, true),
  createBasicData(269, 137, true),
  createBasicData(273, 142),
  createBasicData(277, 148),
  createBasicData(281, 154),
  createBasicData(285, 160),
  createBasicData(289, 167),
  createBasicData(293, 174),
  createBasicData(297, 181),
  createBasicData(301, 188),
  createBasicData(305, 196),
  createBasicData(309, 200),
  createBasicData(316, 203),
  createBasicData(323, 205),
  createBasicData(330, 207),
  createBasicData(340, 210)
];

// This row's maximum sheet ap for bracket
const getMaxFromNextMin = (array: BasicRow[], index: number) => {
  const hasNextRow = index < basicRows.length - 1;

  if (!hasNextRow) {
    return null;
  }

  const nextMin = basicRows[index + 1].min;

  return nextMin - 1;
};

// This row's bonus AP - Last row's bonus AP
const getAdditionalBonusAp = (
  array: BasicRow[],
  index: number,
  bonusAp: number
) => {
  const hasPreviousRow = index > 0;

  if (!hasPreviousRow) {
    return 0;
  }

  const lastBonusAp = array[index - 1].bonusAp;

  return bonusAp - lastBonusAp;
};

// (This row's bonus AP - Last row's bonus AP) / (This row's min - Last row's min)
const getBonusPerSheetIncrease = (
  array: BasicRow[],
  index: number,
  min: number,
  bonusAp: number
) => {
  const additionalBonusAp = getAdditionalBonusAp(array, index, bonusAp);

  if (additionalBonusAp === 0) {
    return 0;
  }

  const lastMin = array[index - 1].min;

  const sheetApIncrease = min - lastMin;

  return roundToNthDecimalPlace(additionalBonusAp / sheetApIncrease, 2);
};

export interface ApBracket {
  min: number;
  bonusAp: number;
  important: boolean;
  veryImportant: boolean;
  max: number | null;
  additionalBonusAp: number;
  bonusPerSheetIncrease: number;
}

const apBrackets: ApBracket[] = basicRows.map(
  ({min, bonusAp, important, veryImportant}, index) => ({
    min,
    bonusAp,
    important,
    veryImportant,
    max: getMaxFromNextMin(basicRows, index),
    additionalBonusAp: getAdditionalBonusAp(basicRows, index, bonusAp),
    bonusPerSheetIncrease: getBonusPerSheetIncrease(
      basicRows,
      index,
      min,
      bonusAp
    )
  })
);

export default apBrackets;
