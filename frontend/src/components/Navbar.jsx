import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { Flex, Spacer, Container, Box } from "@chakra-ui/react";

const Navbar = () => {
  return (
      <Flex minWidth="max-content" p="1rem 2rem" boxShadow="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
        <Box>
          <ChakraLink as={ReactRouterLink} to="/">
            Home
          </ChakraLink>
        </Box>
        <Spacer />
        <Box>
          <ChakraLink as={ReactRouterLink} to="/profile">
            Profile
          </ChakraLink>
        </Box>
        <Spacer />
        <Box>
          <ChakraLink as={ReactRouterLink} to="/login">
            Login
          </ChakraLink>
        </Box>
      </Flex>
  );
};

export default Navbar;
