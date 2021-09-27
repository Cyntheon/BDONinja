import {ReactNode} from "react";
import {default as NextLink} from "next/link";
import {Link as MuiLink} from "@mui/material";

interface Props {
  href: string;
  underline?: "none" | "hover" | "always";
  children: ReactNode;
}

const Link = ({href, underline = "hover", children}: Props) => (
  <NextLink href={href} passHref>
    <MuiLink color="primary" underline={underline}>
      {children}
    </MuiLink>
  </NextLink>
);

export default Link;
