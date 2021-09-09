import {CardContent, Paper} from "@material-ui/core";
import CookingTimeMain from "modules/cooking/time/CookingTimeMain";
import {getPageMeta} from "modules/app/appPaths";

const CookingTimeCalculator = () => (
  <Paper elevation={3}>
    <CardContent>
      <CookingTimeMain />
    </CardContent>
  </Paper>
);

export const getStaticProps = getPageMeta("/cooking/time");

export default CookingTimeCalculator;
