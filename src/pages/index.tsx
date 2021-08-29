import {
  Button,
  CardActionArea, CardActions,
  CardContent, Icon, IconButton,
  Link as MuiLink,
  Paper,
  Typography
} from "@material-ui/core";
import Link from "next/link";
import {NextSeo} from "next-seo";
import {Share, Timer} from "@material-ui/icons";

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
        <CardActionArea>
          <CardContent>
            <Icon>
              <Timer color="primary" />
            </Icon>
            <Link href="/cooking/time" passHref>
              <MuiLink href="" color="primary">
                <Typography variant="h4" component="h2">
                  Cooking Time Calculator
                </Typography>
              </MuiLink>
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton size="small" color="primary">
            <Share />
          </IconButton>
        </CardActions>
      </Paper>
    </>
  );
};

export default Index;
