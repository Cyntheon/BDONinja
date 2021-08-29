import {
  CardActionArea,
  CardActions,
  CardContent,
  Icon,
  Link as MuiLink,
  Paper,
  Typography
} from "@material-ui/core";
import Link from "next/link";
import {css} from "@emotion/react";
import {Timer} from "@material-ui/icons";
import React from "react";
import NavCardBanner from "navCard/NavCardBanner";

interface Props {
  title: string;
  image: StaticImageData;
  path: string;
}

const NavCard = ({title, image, path}: Props) => {
  return (
    <Paper elevation={3}>
      <Link href={path} passHref>
        <MuiLink href="" color="primary">
          <CardActionArea>
            <NavCardBanner
              title={title}
              image={image}
            />
            <CardContent>
              <Typography variant="h4" component="h2">
                <Icon
                  css={css`
                    margin-right: 8px;
                  `}
                >
                  <Timer color="primary" />
                </Icon>
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </MuiLink>
      </Link>
      <CardActions />
    </Paper>
  );
};

export default NavCard;
