import React from "react";
import NavBar from "../components/NavBar";
import Events from "../components/Events";
import { ChakraProvider } from "@chakra-ui/react";

const HomePage = () => {
  console.log("In Home Page");
  return (
    <ChakraProvider>
      <NavBar />
      <Events />
    </ChakraProvider>
  );
};

export default HomePage;
