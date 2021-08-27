import {List, ListItem, ListItemText} from "@material-ui/core";

const DrawerList = () => {
  return (
    <List component="nav">
      <ListItem button>
        <ListItemText primary="Testing" />
      </ListItem>
    </List>
  );
};

export default DrawerList;
