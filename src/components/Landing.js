import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";


const Landing = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    {/* <VStack spacing={16} id="">
      <VStack spacing={4}>
        <Avatar src="https://i.pravatar.cc/150?img=7" size="2x1"/>
        <Heading size="md" >{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </VStack>  
    </VStack> */}
    <Heading>Our Mission</Heading>

    <br></br>

    <Text fontSize="lg"> Our aim is to minimize the use of plastic bags and increase the use of paper bags and cloth bags, which are more sustainable. Our aim is to minimize both the cost and the environmental impact of carbon emissions. To meet the demand for bags and bags, to set a certain limit on carbon emissions, to comply with legal obligations and We aim to find our objective function in the most optimal way, with restrictions such as customer satisfaction being above a certain level.</Text>

  </FullScreenSection>
);

export default Landing;