import React from 'react';
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";


const Person = ({name, department, imgSrc}) => {
    return (
        <VStack
          w="100%"
          bg="white"
          color="black"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          align="stretch"
          spacing={4}
          _hover={{
            boxShadow: "lg",
            textDecoration: "none",
          }}
        >
          {/* <Image src={imgSrc} alt={name} /> */}
          <VStack align="start" px={4} py={2}>
            <Heading as="h3" size="md">
              {name}
            </Heading>
            <Text fontSize="sm">{department}</Text>
          </VStack>
        </VStack>
      );
    }

export default Person;