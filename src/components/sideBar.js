import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const SideBar = ({ data, focusedExpense, setFocusedExpense }) => {
    return (
        <Box
        w="100%"
        h="100vh"
        borderRight="1px solid"
        borderColor="gray.100"
        overflow="scroll"
        >
            {data.map(i => (
                <SideBarItem
                key={i.name}
                data={i}
                setFocusedExpense={setFocusedExpense}
                focusedExpense={focusedExpense}
                />
            ))}
        </Box>
    )
}

const SideBarItem = ({ data, focusedExpense, setFocusedExpense }) => {

    return (
        <Box
        py="0.8rem"
        pl="2rem"
        onClick={() => setFocusedExpense(data.name)}
        cursor="pointer"
        backgroundColor={focusedExpense === data.name && "gray.100"}
        >
            <Text
            fontWeight="400"
            >{data.name}</Text>
        </Box>
    )
}

export default SideBar
