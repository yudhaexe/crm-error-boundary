"use client";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import {
  BoltOutlined,
  CableOutlined,
  ChatBubbleOutline,
  HelpOutlineOutlined,
  HouseOutlined,
  LayersClearOutlined,
  LayersOutlined,
  LogoutOutlined,
  PeopleOutlineOutlined,
  Person,
  PersonAdd,
  PersonAddOutlined,
  SettingsOutlined,
  Star,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const pages = ["Dashboard", "CRM", "Submission", "Commission", "LMS"];
export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      className="mb-8"
      position="static"
      elevation={1}
      sx={{ background: "transparent" }}
    >
      <Container>
        <Toolbar disableGutters>
          <Box className="flex-grow xs:flex md:hidden">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "black" }}
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
              className="xs:block md:hidden "
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link href="/profile" className="text-black">
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Star className=" mr-1" sx={{ color: "black" }} />
          <Typography
            noWrap
            component="a"
            href="/"
            className="mr-5 flex xs:text-lg md:text-lg flex-grow md:flex-grow-0 font-bold  text-black"
          >
            Acme Corp
          </Typography>
          <Box className="flex-grow hidden md:flex gap-5 mx-5">
            {pages.map((page) => (
              <Link
                href="/profile"
                key={page}
                onClick={handleCloseNavMenu}
                className="my-2  flex normal-case text-base font-semibold text-gray-700"
              >
                {page}
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Profile Pict" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem className="flex flex-col items-start gap-4">
                <div className="flex gap-2 mb-1">
                  <Avatar
                    alt="Profile Pict"
                    src="/static/images/avatar/2.jpg"
                  />
                  <div className="flex-col">
                    <Typography className="font-bold text-md">
                      Olivia Rhye
                    </Typography>
                    <Typography className="text-sm">
                      olivia@lorem.com
                    </Typography>
                  </div>
                </div>
                <Divider/>
                <div className="flex gap-2">
                  <Person fontSize="small" />
                  <Typography className="text-sm">View Profile</Typography>
                </div>
                <div className="flex gap-2">
                  <SettingsOutlined fontSize="small" />
                  <Typography className="text-sm">Setting</Typography>
                </div>
                <div className="flex gap-2">
                  <BoltOutlined fontSize="small" />
                  <Typography className="text-sm">Keyboard Shortcut</Typography>
                </div>
                <Divider/>
                <div className="flex gap-2">
                  <HouseOutlined fontSize="small" />
                  <Typography className="text-sm">Company Profile</Typography>
                </div>
                <div className="flex gap-2">
                  <PeopleOutlineOutlined fontSize="small" />
                  <Typography className="text-sm">Team</Typography>
                </div>
                <div className="flex gap-2">
                  <PersonAddOutlined fontSize="small" />
                  <Typography className="text-sm">Invite colleagues</Typography>
                </div>
                <Divider/>
                <div className="flex gap-2">
                  <LayersOutlined fontSize="small" />
                  <Typography className="text-sm">Slack Community</Typography>
                </div>
                <div className="flex gap-2">
                  <Person fontSize="small" />
                  <Typography className="text-sm">Support</Typography>
                </div>
                <div className="flex gap-2">
                  <HelpOutlineOutlined fontSize="small" />
                  <Typography className="text-sm">API</Typography>
                </div>
                <Divider/>
                <div className="flex gap-2">
                  <LogoutOutlined fontSize="small" />
                  <Typography className="text-sm">Log out</Typography>
                </div>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
