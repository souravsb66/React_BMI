import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div>
      <ChakraLink as={ReactRouterLink} to="/">
        Home
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/profile">
      Profile
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/login">
      Login
      </ChakraLink>
    </div>
  );
};

export default Navbar;
