import React from "react";
import { Avatar, Heading, VStack, Text, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const Landing = () => (

  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Box
     backgroundImage='https://www.worldatlas.com/r/w1200/upload/48/43/a9/shutterstock-1092713039.jpg'
     backgroundSize='cover'
     backgroundPosition='center'
     backgroundRepeat="no-repeat"
     color='white'
     textAlign="center"
     h="105vh"
     w='1515px'
     p={20}

     
     >

      <Heading>Our Mission</Heading>

      <br></br>

      <Text fontSize="lg"> Our aim is to minimize the use of plastic bags and increase the use of more sustainable paper bags and cloth bags. Our objective function is to minimize both the cost and the environmental impact of carbon emissions. We aim to find our objective function in the most optimal way, with restrictions such as meeting the demand for pouches, setting a certain limit on carbon emissions, complying with legal obligations and ensuring customer satisfaction is above a certain level.</Text>
    </Box>
  </FullScreenSection>
);

export default Landing;