import {
  CardContent,
  Link as MuiLink,
  Paper,
  Typography
} from "@material-ui/core";
import Link from "next/link";
import {NextSeo} from "next-seo";

const Index = () => {
  return (
    <>
      <NextSeo
        title="Home"
        openGraph={{
          title: "Home"
        }}
      />
      <Paper elevation={3}>
        <CardContent>
          <Link href="/cooking/time" passHref>
            <MuiLink href="" color="secondary">
              <Typography variant="h4">
                Cook Time Calculator
              </Typography>
            </MuiLink>
          </Link>
        </CardContent>
      </Paper>
    </>
  );
};

export default Index;
