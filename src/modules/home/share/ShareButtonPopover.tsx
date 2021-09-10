import {Card, CardContent, Popover} from "@material-ui/core";
import React from "react";
import ShareButtonPopoverLink from "modules/home/share/ShareButtonPopoverLink";

interface Props {
  anchorElement: HTMLButtonElement | null;
  handleClose: () => void;
}

const ShareButtonPopover = ({anchorElement, handleClose}: Props) => {
  return (
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
          <ShareButtonPopoverLink />
        </CardContent>
      </Card>
    </Popover>
  );
};

export default ShareButtonPopover;
