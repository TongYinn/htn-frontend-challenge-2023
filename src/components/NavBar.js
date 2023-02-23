import React from "react";
import { Menu, MenuItem } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  return (
    <Menu>
      {isLoading ? (
        <MenuItem>loading</MenuItem>
      ) : isAuthenticated ? (
        <>
          <MenuItem
            onClick={() =>
              logout({
                logoutParams: {
                  returnTo: window.location.origin,
                },
              })
            }
          >
            logout
          </MenuItem>
        </>
      ) : (
        <MenuItem onClick={() => loginWithRedirect()}>login</MenuItem>
      )}
    </Menu>
  );
};

export default NavBar;
