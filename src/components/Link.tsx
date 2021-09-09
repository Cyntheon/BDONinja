import {ReactNode} from "react";
import {default as NextLink} from "next/link";
import {Link as MuiLink} from "@material-ui/core";

interface Props {
  href: string;
  children: ReactNode;
}

const Link = ({href, children}: Props) => (
  <NextLink href={href} passHref>
    <MuiLink color="primary">{children}</MuiLink>
  </NextLink>
);

export default Link;
