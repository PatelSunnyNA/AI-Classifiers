import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import { ColorModeContext } from "../../theme";
import {  useMediaQuery } from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";

import MenuItem from "@mui/material/MenuItem";
import ArticleIcon from '@mui/icons-material/Article';
import Menu from "@mui/material/Menu";
function Navbar(props) {
  const pages = ["Products", "Pricing", "Blog"];
  const breakPoint = useMediaQuery("(min-width:600px)");
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const DrawerButton = ({ href, icon, text }) => {
    const theme = useTheme();
    return (
      <Box sx={{ display: { sm: "block", md: "none" } }}>
        <Link to={href} style={{ textDecoration: "none" }}>
          <Button
            color="primary"
            variant="text"
            startIcon={icon}
            sx={{
              color: theme.palette.text.primary,
              mx: 1.5,
              marginLeft: "15px",
            }}
          >
            <Box>
              <Typography>{text}</Typography>
            </Box>
          </Button>
        </Link>
      </Box>
    );
  };


  const NavbarButton = ({ href, icon, text }) => {
    const theme = useTheme();
    return (
      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
        <Link to={href} style={{ textDecoration: "none" }}>
          <Button
            color="primary"
            variant="text"
            startIcon={icon}
            sx={{
              color: theme.palette.text.primary,
              mx: 1.5,
            }}
          >
            <Box>
              <Typography>{text}</Typography>
            </Box>
          </Button>
        </Link>
      </Box>
    );
  };

  const NavbarLogo = () => {
    const theme = useTheme();
    return (
      <Box sx={{ alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            color="primary"
            variant="text"
            disableRipple
            sx={{
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent",
              },
              color: theme.palette.text.primary,
            }}
          >
            <Typography variant="h2" component="div">
              Sunny Patel
            </Typography>
          </Button>
        </Link>
      </Box>
    );
  };


  return (
    <Box>

      <AppBar
        component="nav"
        color="default"
        position="fixed"
        sx={{
          border: 0,
          height: "60px",
          boxShadow:
            "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h2"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AI Classifiers
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <DrawerButton href="/" icon={<HomeIcon />} text="Home" />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <DrawerButton
                  href="/number"
                  icon={<CodeIcon />}
                  text="Digit AI"
                />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <DrawerButton
                  href="/image"
                  icon={<ArticleIcon />}
                  text="Image AI"
                />
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <NavbarLogo />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <NavbarButton href="/" icon={<HomeIcon />} text="Home" />
            <NavbarButton
              href="/number"
              icon={<CodeIcon />}
              text="Digit AI"
            />
            <NavbarButton
              href="/image"
              icon={<ArticleIcon />}
              text="Image AI"
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
