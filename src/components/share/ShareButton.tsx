import {IconButton, Tooltip} from "@mui/material";
import {Share} from "@mui/icons-material";
import {MouseEvent, useState} from "react";
import ShareButtonPopover from "components/share/ShareButtonPopover";

interface Props {
  path: string;
}

const ShareButton = ({path}: Props) => {
  const [anchorElement, setAnchorElement] = useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <>
      <Tooltip title="Share" aria-label="share">
        <IconButton size="small" color="primary" onClick={handleClick}>
          <Share />
        </IconButton>
      </Tooltip>
      <ShareButtonPopover
        path={path}
        anchorElement={anchorElement}
        handleClose={handleClose}
      />
    </>
  );
};

export default ShareButton;
