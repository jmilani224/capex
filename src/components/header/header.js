import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import Nav from './nav'

const Header = () => {
    return (
        <Box
        minW="100vw"
        bg="teal.500"
        >
            <Heading
            color="white"
            py={5}
            textAlign="center"
            >
                Extremely Good CAPEX Calculator
            </Heading>
            <Nav />
        </Box>
    )
}

export default Header