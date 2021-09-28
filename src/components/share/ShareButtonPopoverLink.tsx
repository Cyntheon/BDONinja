import {InputAdornment, TextField} from "@mui/material";
import {Link as LinkIcon} from "@mui/icons-material";
import React from "react";
import {PagePath} from "app/page/pageMetas";

interface Props {
  path: PagePath;
}

const ShareButtonPopoverLink = ({path}: Props) => (
  <TextField
    color="success"
    label="Click to Copy!"
    value={`https://www.bdo.ninja${path}`}
    onFocus={(e) => {
      e.target.select();
      document.execCommand("copy");
    }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <LinkIcon />
        </InputAdornment>
      )
    }}
  />
);

export default ShareButtonPopoverLink;
