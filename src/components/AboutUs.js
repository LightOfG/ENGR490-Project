import React from 'react'
import FullScreenSection from './FullScreenSection'
import { Box, Heading, VStack, } from '@chakra-ui/react'
import Person from './Person'

const allPerson = [
    {
        name: "Salih Işık",
        department: "Computer Engineering",
        //getImgSrc: () => require("../images/salih.jpg")
    },
    {
        name: "Selin Özkan",
        department: "Industrial Engineering"
    },
    {
        name: "Petek Akyol",
        department: "Computer Engineering"
    },
    {
        name: "Beril Özden",
        department: "Industrial Engineering"
    },

    {
        name: "Mehmet Koç",
        department: "Computer Engineering"
    },
    {
        name: "Tuna Kayra Demir",
        department: "Computer Engineering"
    },
    {
        name: "Ömer Kürşat Artar",
        department: "Computer Engineering"
    },
    {
        name: "Murat Bediz",
        department: "Computer Engineering"
    },

]

export const AboutUs = () => {
    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            isDarkBackground
            backgroundColor="#03fcf8"
        >
            <Box
                backgroundImage='https://cff2.earth.com/uploads/2023/03/31135949/Sustainable-scaled.jpg'
                backgroundSize='cover'
                backgroundPosition='center'
                backgroundRepeat="no-repeat"
                h="105vh"
                w='1515px'
                p={20}
                
            >

                <VStack mb={20}>
                    <div id='about-us'>
                        <Heading>Who Are We</Heading>
                    </div>

                    <Box
                        display="grid"
                        gridTemplateColumns="repeat(2,minmax(0,1fr))"
                        gridGap={8}
                    >
                        {allPerson.map((person) => (
                            <Person
                                key={person.name}
                                name={person.name}
                                department={person.department}
                            //imgSrc={person.}
                            />
                        ))}

                    </Box>

                </VStack>
            </Box>
        </FullScreenSection>
    )
}
