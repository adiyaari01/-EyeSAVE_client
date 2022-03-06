import { useState, memo } from "react";
import { Outlet } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import LogoMenu from "../components/LogoMenu"
import Links from "../components/Links"
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles'
import "./styles.css";

const DrawerStyles = makeStyles({
  paper : {backgroundColor: "#3F414D !important"},
});
// Todo: how to set background of drawer?
// memo: save cache, will not render a component that didn't change
export default memo(() => {
  const [isOpen, setMenu] = useState(false);
  const toggleMenu = () => setMenu((prev) => !prev);
  const toolbarStyle = {
    background : '#575E68',
  };
  const drawerClasses = DrawerStyles();
  return (
    <>
      <AppBar position="static" style={{boxShadow: "none"}} >
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
          <SearchIcon />
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" classes={drawerClasses} open={isOpen} onClose={() => toggleMenu()}>
          <LogoMenu />
          <Links />
      </Drawer>
      <Outlet />
    </>
  );
});
