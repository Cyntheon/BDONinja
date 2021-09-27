import {CardContent, Paper} from "@mui/material";
import CookingTimeMain from "modules/cooking/time/CookingTimeMain";
import PageWrapper from "app/page/PageWrapper";

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
