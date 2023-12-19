import React, { useState } from 'react'
import FullScreenSection from './FullScreenSection';
import SubmitPanel from './SubmitPanel';

import {
    Stack, Button, Input, FormLabel, VStack, RadioGroup, Radio, Box, Heading, Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Center, Textarea, Select
} from '@chakra-ui/react';

const Calculations = () => {

    const [bagData, setBagData] = useState('1')

    const [satisfactionValue, setSatisfactionValue] = useState(10)

    let [comments, setComments] = useState('')


    const [panel, setPanel] = useState(false);

    const handlePanel = () => {
        setPanel(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPanel(true);
    }



    return (
        <FullScreenSection
            backgroundColor="#14532d"
            isDarkBackground
            p={8}
            spacing={8}
        >

            <div id='calculations'>
                <Center><Heading as='h1' id="calculations">Show your Results!</Heading></Center>
                <VStack w="800px" p={10} alignItems='flex-start'>


                    <Box p={6} rounded='md' w='100%'>

                        <form onSubmit={handleSubmit}>
                            <VStack spacing={3}>
                                <FormLabel htmlFor='bagData' fontSize="lg">Which type of bag do you use?</FormLabel>
                                <RadioGroup onChange={setBagData} value={bagData} id='bagData'>
                                    <Stack direction='row' mx={3}>
                                        <Radio value='1' size="lg" mx={3}>Plastic Bag</Radio>
                                        <Radio value='2' size="lg" mx={3}>Paper Bag</Radio>
                                        <Radio value='3' size="lg" mx={3}>Cloth Bag</Radio>
                                    </Stack>
                                </RadioGroup>


                                <FormLabel htmlFor='satisfactionValue' fontSize="lg" mt={14} mb={4}>Your Satisfaction 0 - 10</FormLabel>
                                <Slider id='satisfactionValue' defaultValue={10} min={0} max={10} step={1} onChange={(val) => setSatisfactionValue(val)} >
                                    <SliderMark
                                        value={satisfactionValue}
                                        id='satisfactionValue'
                                        textAlign='center'
                                        bg='blue.500'
                                        color='white'
                                        mt='-10'
                                        ml='-5'
                                        w='12'
                                    >
                                        {satisfactionValue}
                                    </SliderMark>
                                    <SliderTrack bg='red.100'>
                                        <Box position='relative' right={10} />
                                        <SliderFilledTrack bg='green' />
                                    </SliderTrack>
                                    <SliderThumb boxSize={6} />
                                </Slider>

                                {/* <Textarea
                                    value={comments}
                                    onChange={(e) => setComments(e.target.value)}
                                    placeholder='Add your comments'
                                    borderRadius={4}
                                    mt={3}
                                /> */}

                                <Select  color='black' placeholder='Chose Your Comment' value={comments} onChange={(e)=> setComments(e.target.value)}>
                                    <option color='black' value='Expensive'>Expensive</option>
                                    <option color='red' value='Insufficient Bag Capacity'>Insufficient Bag Capacity</option>
                                    <option color='red' value='Durability of Bag'>Durability of Bag</option>
                                </Select>





                                <Button type='submit' my={6} p={6}>Show Your Result</Button>
                            </VStack>
                        </form>
                    </Box>

                </VStack>
                {(panel)
                    &&
                    (<SubmitPanel bagData={bagData} satisfactionValue={satisfactionValue} comments={comments} onClose={handlePanel} />)
                }

            </div>
        </FullScreenSection>
    )
}

export default Calculations;