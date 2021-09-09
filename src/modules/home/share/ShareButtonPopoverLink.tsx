import {InputAdornment, TextField} from "@material-ui/core";
import {Link as LinkIcon} from "@material-ui/icons";
import React from "react";

const ShareButtonPopoverLink = () => (
  <TextField
    label="Click to Copy!"
    value="https://www.bdo.ninja/cooking/time"
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
