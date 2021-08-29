import {Card, CardContent, Typography} from "@material-ui/core";
import Link from "next/link";
import {Link as MuiLink} from "@material-ui/core";
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
      <Card>
        <CardContent>
          <Typography>
            <Link href="/cooking/time" passHref>
              <MuiLink href="" color="secondary">
                Cook Time Calculator
              </MuiLink>
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Index;
