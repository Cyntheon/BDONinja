import {Card, CardContent, Typography} from "@material-ui/core";
import Link from "next/link";
import {Link as MuiLink} from "@material-ui/core";

const Index = () => {
  return (
    <Card>
      <CardContent>
        <Typography>
          <Link href="/cooking/cookTime">
            <MuiLink href="">
              Cook Time Calculator
            </MuiLink>
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Index;
