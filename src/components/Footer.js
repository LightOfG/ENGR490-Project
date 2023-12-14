import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <Text>ENGR490 - GROUP1</Text>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;