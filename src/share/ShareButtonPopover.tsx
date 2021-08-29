import {
  Backdrop,
  Card,
  CardContent,
  InputAdornment,
  Popover,
  TextField
} from "@material-ui/core";
import {Link as LinkIcon} from "@material-ui/icons";
import React from "react";

interface Props {
  anchorElement: HTMLButtonElement | null;
  handleClose: () => void;
}

const ShareButtonPopover = ({anchorElement, handleClose}: Props) => {
  return (
    <Backdrop open={!!anchorElement}>
      <Popover
        open={!!anchorElement}
        onClose={handleClose}
        anchorEl={anchorElement}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Card>
          <CardContent>
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
          </CardContent>
        </Card>
      </Popover>
    </Backdrop>
  );
};

export default ShareButtonPopover;
