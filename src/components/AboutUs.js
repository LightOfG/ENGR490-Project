import React from 'react'
import FullScreenSection from './FullScreenSection'
import { Box } from '@chakra-ui/react'
import Person from './Person'

const allPerson = [
    {
        name: "Salih Işık",
        department: "Computer Engineering",
        //getImgSrc: () => require("../images/salih.jpg")
    }
]

export const AboutUs = () => {
    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            isDarkBackground
            backgroundColor="#03fcf8"
        >
            <div id='about-us'>AboutUs</div>

            <Box
                display="grid"
                gridTemplateColumns="repeat(2,minmax(0,1fr))"
                gridGap={8}
            >
                {allPerson.map((person)=>(
                    <Person
                    key={person.name}
                    name = {person.name}
                    department={person.department}
                    //imgSrc={person.}
                    />
                ))}

            </Box>
        </FullScreenSection>
    )
}
