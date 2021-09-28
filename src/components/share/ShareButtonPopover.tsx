import {Card, CardContent, Popover} from "@mui/material";
import React from "react";
import ShareButtonPopoverLink from "components/share/ShareButtonPopoverLink";
import {PagePath} from "app/page/pageMetas";

interface Props {
  path: PagePath;
  anchorElement: HTMLButtonElement | null;
  handleClose: () => void;
}

const ShareButtonPopover = ({path, anchorElement, handleClose}: Props) => {
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
          <ShareButtonPopoverLink path={path} />
        </CardContent>
      </Card>
    </Popover>
  );
};

export default ShareButtonPopover;
