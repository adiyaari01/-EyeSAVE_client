import { useState, memo } from "react";
import { Outlet } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import LogoMenu from "../components/LogoMenu";
import Links from "../components/Links";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import { Box, Stack } from "@mui/material";
import "./styles.css";

const DrawerStyles = makeStyles({
  paper: { backgroundColor: "#3F424C !important" },
});

const drawerWidth = 280 ;
// memo: save cache, will not render a component that didn't change
export default memo(() => {
  const [isOpen, setMenu] = useState(false);
  const toggleMenu = () => setMenu((prev) => !prev);
  const toolbarStyle = {
    background: "#575E68",
  };
  const drawerClasses = DrawerStyles();
  return (
    <Stack direction={"row"}>
      <AppBar position="fixed" style={{ boxShadow: "none" }}>
        <Toolbar style={toolbarStyle}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ display: "flex", flexGrow: 1 }}></div>
          <SearchIcon />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          anchor="left"
          variant={"permanent"}
          classes={drawerClasses}
          // open={isOpen}
          onClose={() => toggleMenu()}
          sx={{
            display: { xs: 'none', sm: 'none', md:"block" },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}

        >
          <LogoMenu />
          <Links />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Stack>
  );
});
