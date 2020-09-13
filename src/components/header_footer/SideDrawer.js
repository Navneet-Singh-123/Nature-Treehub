import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

function SideDrawer(props) {
  const [openPlant, setOpenPlant] = React.useState(true);
  const [openSeed, setOpenSeed] = React.useState(true);

  const handlePlantClick = () => {
    setOpenPlant(!openPlant);
  };
  const handleSeedClick = () => {
    setOpenSeed(!openSeed);
  };

  return (
    <Drawer
      anchor="left"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={handlePlantClick}>
          <ListItemText primary="Plants" />
          {openPlant ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openPlant} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemText primary="Home Decoration" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Garden Plants" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Office Plants" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleSeedClick}>
          <ListItemText primary="Seeds" />
          {openSeed ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSeed} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemText primary="Flowers" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Fruits" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Seasonal" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Vegetables/Salad" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
}

export default SideDrawer;
