import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import ArticlePaper from "components/ArticlePaper";
import {css} from "@emotion/react";

interface BasicRow {
  min: number;
}

const createBasicData = (min: number) => {
  return {min};
};

const basicRows = [
  createBasicData(0),
  createBasicData(203),
  createBasicData(211),
  createBasicData(218),
  createBasicData(226),
  createBasicData(233),
  createBasicData(241),
  createBasicData(248),
  createBasicData(256),
  createBasicData(263),
  createBasicData(271),
  createBasicData(278),
  createBasicData(286),
  createBasicData(293),
  createBasicData(301),
  createBasicData(308),
  createBasicData(315),
  createBasicData(322),
  createBasicData(329),
  createBasicData(335),
  createBasicData(341),
  createBasicData(347),
  createBasicData(353),
  createBasicData(359),
  createBasicData(365),
  createBasicData(371),
  createBasicData(377),
  createBasicData(383),
  createBasicData(389),
  createBasicData(395),
  createBasicData(401)
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

const rows = basicRows.map(({min}, index) => ({
  min,
  max: getMaxFromNextMin(basicRows, index),
  bonusDr: index
}));

const DpBrackets = () => (
  <TableContainer component={ArticlePaper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Sheet DP</TableCell>
          <TableCell>Bonus DR</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(({min, max, bonusDr}) => (
          <TableRow key={min}>
            <TableCell>
              {max ? `${min} - ${max} (${max - min + 1})` : `${min}+`}
            </TableCell>
            <TableCell>{bonusDr}%</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default DpBrackets;
