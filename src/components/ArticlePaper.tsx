import {ReactNode} from "react";
import {Paper} from "@mui/material";

interface Props {
  children: ReactNode;
}

const ArticlePaper = ({children}: Props) => (
  <Paper elevation={3} component="article">
    {children}
  </Paper>
);

export default ArticlePaper;
