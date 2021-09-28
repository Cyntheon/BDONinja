import {CardContent} from "@mui/material";
import CookingTimeMain from "modules/cooking/time/CookingTimeMain";
import PageWrapper from "app/page/PageWrapper";
import ArticlePaper from "components/ArticlePaper";

const CookingTimeCalculator = () => (
  <PageWrapper path="/cooking/time">
    <ArticlePaper>
      <CardContent>
        <CookingTimeMain />
      </CardContent>
    </ArticlePaper>
  </PageWrapper>
);

export default CookingTimeCalculator;
