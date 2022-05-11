import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { ListItem } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import BrightnessLowTwoToneIcon from "@mui/icons-material/BrightnessLowTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import Tooltip from "@mui/material/Tooltip";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  overflowX: "hidden",
  width: `calc(${theme.spacing(6)} + 1px)`,
}));

export default function SideDrawer(props) {
  const theme = useTheme();

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* For app bar in the future */}

      {/* <AppBar position='fixed' open={open}>
         <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            buildR engine
          </Typography> 
        </Toolbar>
      </AppBar> */}
      <Drawer variant='permanent'>
        <DrawerHeader>
          buildR <br /> engine
        </DrawerHeader>
        <Divider sx={{ borderBottomWidth: 5 }} />
        <List>
          <Tooltip title='Home' placement='right' arrow>
            <NavLink to='/'>
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
                variant='contained'
                sx={{
                  minHeight: 48,
                  justifyContent: "center",
                  px: 1,
                }}>
                <ListItemIcon
                  sx={{
                    minWidth: 1,
                    justifyContent: "center",
                  }}>
                  {<HomeTwoToneIcon />}
                </ListItemIcon>
                <ListItemText primary='' sx={{ opacity: 0.9 }} />
              </ListItemButton>
            </NavLink>
          </Tooltip>
          <Divider />

          <Tooltip arrow title='Docs' placement='right'>
            <NavLink to='docs'>
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
                sx={{
                  minHeight: 48,
                  justifyContent: "center",
                  px: 1,
                }}>
                <ListItemIcon
                  sx={{
                    minWidth: 1,
                    mr: "auto",
                    justifyContent: "center",
                  }}>
                  {<MenuBookTwoToneIcon />}
                </ListItemIcon>
                <ListItemText primary='' sx={{ opacity: 0.9 }} />
              </ListItemButton>
            </NavLink>
          </Tooltip>
          <Divider />

          <Tooltip arrow title='Setting' placement='right'>
            <NavLink to='settings'>
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => {
                  handleListItemClick(event, 2);
                }}
                sx={{
                  minHeight: 48,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  px: 2,
                  position: "relative",
                }}>
                <ListItemIcon
                  sx={{
                    minWidth: 1,
                    mr: "center",
                    justifyContent: "center",
                  }}>
                  {<BrightnessLowTwoToneIcon />}
                </ListItemIcon>
                <ListItemText primary='' sx={{ opacity: 0.9 }} />
              </ListItemButton>
            </NavLink>
          </Tooltip>
        </List>
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        {props.main}
      </Box>
    </Box>
  );
}
