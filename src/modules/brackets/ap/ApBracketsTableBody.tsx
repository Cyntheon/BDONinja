import {TableBody, TableCell, TableRow} from "@mui/material";
import rowStyles from "modules/brackets/rowStyles";
import apBrackets from "modules/brackets/ap/apBrackets";

const ApBracketsTableBody = () => (
  <TableBody>
    {apBrackets.map(
      ({
        min,
        max,
        bonusAp,
        important,
        veryImportant,
        additionalBonusAp,
        bonusPerSheetIncrease
      }) => (
        <TableRow key={min} css={rowStyles(important, veryImportant)}>
          <TableCell>
            {max ? `${min} - ${max} (${max - min + 1})` : `${min}+`}
          </TableCell>
          <TableCell>{bonusAp}</TableCell>
          <TableCell>{additionalBonusAp}</TableCell>
          <TableCell>{bonusPerSheetIncrease}</TableCell>
        </TableRow>
      )
    )}
  </TableBody>
);

export default ApBracketsTableBody;
