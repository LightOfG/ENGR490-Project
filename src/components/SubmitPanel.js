import React from 'react'
import { Center, Text, VStack, Box, Button } from '@chakra-ui/react'

const SubmitPanel = ({ bagData, satisfactionValue, comments, onClose }) => {

    let submitPanelContent;

    if (bagData === '1') { //PLASTIC

        submitPanelContent = (
            <VStack spacing={4}>
                <Text fontSize="xl"> You are using Plastic </Text>
                <Text>Your Satisfaction Value is ${`satisfactionValue {satisfactionValue}`}{satisfactionValue}</Text>
                <Text>And you added these comments: {comments}</Text>
            </VStack>
        )
    }



    else {
        submitPanelContent = (
            <VStack spacing={4}>
                <Text fontSize="xl"> Panel Basligi </Text>
                <Text>sadsdasda</Text>
            </VStack>
        )
    }

    console.log('submitPanelContent:', submitPanelContent);



    return (
        <Box
            position='fixed'
            left='50%'
            top='50%'
            p={8}
            borderRadius='md'
            zIndex={1905}
            boxShadow="md"
            transform='translate(-50%,-50%)'
            bgColor="white"
        >
            {submitPanelContent}
            <Center><Button colorScheme='blue' onClick={onClose}>Got It!</Button> </Center>
        </Box>
         )
}

export default SubmitPanel