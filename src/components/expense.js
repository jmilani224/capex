import React from 'react'
import { Heading, Box } from '@chakra-ui/react'

const Expense = ({title}) => {
    return (
        <Box>
            <Heading>{title}</Heading>
        </Box>
    )
}

export default Expense