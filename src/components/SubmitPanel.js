import React from 'react'
import { Center, Text, VStack, Box, Button, Heading } from '@chakra-ui/react'

const SubmitPanel = ({ bagData, satisfactionValue, comments, onClose }) => {

    var submitPanelContent;

    if (bagData === '1') { //PLASTIC

        submitPanelContent = (
            <VStack spacing={4} w="100%">
                <Heading color='tomato'>Plastic Bags Decompose In Nature In </Heading>
                <Heading color='tomato'>1000 Years</Heading>
                <Text fontSize="xl" color='tomato'> You are using Plastic Bag </Text>
                <Text color='tomato'>Your Satisfaction Value is {satisfactionValue}</Text>
                <Text color='tomato'>And Reason Comments: </Text>
                <Text color="tomato">{comments}</Text>
                <Text color="tomato">Please Minimize The Use of Plastic</Text>


            </VStack>
        )
    }

    else if (bagData === '2') { //PAPER BAG
        submitPanelContent = (
            <VStack spacing={4} w="100%">
                <Heading color='tomato'>Thanks A Lot</Heading>
                <Text fontSize="xl" color='tomato'> You are using Paper Bag </Text>
                <Text color='tomato'>Your Satisfaction Value is {satisfactionValue}</Text>
                <Text color='tomato'>And reason comments: </Text>
                <Text color="tomato">{comments}</Text>
                <Text color='tomato'>Next Generations Will Be Grateful To You</Text>
            </VStack>
        )
    }

    else { //CLOTH BAG
        submitPanelContent = (
            <VStack spacing={4} w="100%">
                <Heading color='tomato'>Thanks A Lot</Heading>
                <Text fontSize="xl" color='tomato'> You are using Cloth Bag </Text>
                <Text color='tomato'>Your Satisfaction Value is {satisfactionValue}</Text>
                <Text color='tomato'>And reason comments: </Text>
                <Text color="tomato">{comments}</Text>
                <Text color='tomato'>Next Generations Will Be Grateful To You</Text>
            </VStack>
        )
    }

    return (
        <Box
            position='fixed'
            left='50%'
            top='50%'

            p={16}
            borderRadius='md'
            zIndex={1905}
            boxShadow="md"
            transform='translate(-50%,-50%)'
            bgColor="white"
            overflow="auto"
        >

            {(submitPanelContent)}
            <Center><Button mt={4} colorScheme='blue' onClick={onClose}>Got It!</Button> </Center>
        </Box>
    )
}

export default SubmitPanel