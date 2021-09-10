import React from "react";
import {Typography} from "@material-ui/core";

const Highlight = ({children}: {children: React.ReactNode}) => {
  return (
    <Typography variant="inherit" color="primary">
      {children}
    </Typography>
  );
};

export default Highlight;
