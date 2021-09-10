export const roundToNthDecimalPlace = (num: number, decimalPlaces: number) => {
  const tenToTheN = Math.pow(10, decimalPlaces);

  return Math.round(num * tenToTheN) / tenToTheN;
};
