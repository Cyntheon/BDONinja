import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Icon,
  IconButton,
  Link as MuiLink,
  Paper,
  Typography
} from "@material-ui/core";
import Link from "next/link";
import {NextSeo} from "next-seo";
import {Share, Timer} from "@material-ui/icons";
import {css} from "@emotion/react";

const Index = () => {
  return (
    <>
      <NextSeo
        title="Home"
        openGraph={{
          title: "Home"
        }}
      />
      <Typography
        variant="h3"
        component="h1"
        css={css`
          &.MuiTypography-root {
            text-align: center;
            margin-bottom: 32px;
          }
        `}
      >
        Welcome to BDO Ninja!
      </Typography>
      <Paper elevation={3}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt=""
            height="250"
            image="https://live.staticflickr.com/4758/39260746395_6a32e97eb8_b.jpg"
            title="Cooking Time Calculator"
          />
          <CardContent>
            <Link href="/cooking/time" passHref>
              <MuiLink href="" color="primary">
                <Typography variant="h4" component="h2">
                  <Icon
                    css={css`
                      margin-right: 8px;
                    `}
                  >
                    <Timer color="primary" />
                  </Icon>
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
