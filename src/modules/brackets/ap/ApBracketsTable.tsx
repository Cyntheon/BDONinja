import {Table, TableContainer} from "@mui/material";
import ArticlePaper from "components/ArticlePaper";
import ApBracketsTableHead from "modules/brackets/ap/ApBracketsTableHead";
import ApBracketsTableBody from "modules/brackets/ap/ApBracketsTableBody";

const ApBracketsTable = () => (
  <TableContainer component={ArticlePaper}>
    <Table>
      <ApBracketsTableHead />
      <ApBracketsTableBody />
    </Table>
  </TableContainer>
);

export default ApBracketsTable;
