import {IconButton, Tooltip} from "@material-ui/core";
import {Share} from "@material-ui/icons";
import React, {useState} from "react";
import ShareButtonPopover from "share/ShareButtonPopover";

const ShareButton = () => {
  const [anchorElement, setAnchorElement] =
    useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <>
      <Tooltip title="Share" aria-label="share">
        <IconButton
          size="small"
          color="primary"
          onClick={handleClick}
        >
          <Share />
        </IconButton>
      </Tooltip>
      <ShareButtonPopover
        anchorElement={anchorElement}
        handleClose={handleClose}
      />
    </>
  );
};

export default ShareButton;
