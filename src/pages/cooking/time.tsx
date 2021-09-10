import {CardContent, Paper} from "@material-ui/core";
import CookingTimeMain from "modules/cooking/time/CookingTimeMain";
import PageWrapper from "modules/app/PageWrapper";

const CookingTimeCalculator = () => (
  <PageWrapper path="/cooking/time">
    <Paper elevation={3}>
      <CardContent>
        <CookingTimeMain />
      </CardContent>
    </Paper>
  </PageWrapper>
);

export default CookingTimeCalculator;
