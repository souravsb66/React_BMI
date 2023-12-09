import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Container,
  Input,
  Button,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false)
  const handlePassword = () => setShow(!show)

  const handleChange = (e) => {
    setLoginData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </FormControl>
        <FormControl>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handlePassword}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button colorScheme="teal" type="submit">
          Button
        </Button>
      </form>
    </Container>
  );
};

export default Login;