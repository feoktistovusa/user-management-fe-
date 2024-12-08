import React from "react";
import { useLogout, useGetIdentity, usePermissions } from "@refinedev/core";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { ExitToApp, Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  const { mutate: logout } = useLogout();
  const { data: identity, isLoading: isIdentityLoading } = useGetIdentity();
  const { data: permissionsData, isLoading: isPermissionsLoading } = usePermissions();

  const handleLogout = () => {
    logout();
  };

  // Check if user is admin
  const isAdmin = permissionsData?.data === "admin";

  return (
      <AppBar position="static">
        <Toolbar>
          {/* Menu Icon */}
          <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>

          {/* App Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Management App
          </Typography>

          {/* Navigation Links */}
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          {isAdmin && (
              <Button color="inherit" component={Link} to="/users">
                Users
              </Button>
          )}

          {/* Logout Button */}
          <IconButton color="inherit" onClick={handleLogout}>
            <ExitToApp />
          </IconButton>
        </Toolbar>
      </AppBar>
  );
};
