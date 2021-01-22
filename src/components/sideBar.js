import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const SideBar = ({ data, focusedExpense, setFocusedExpense }) => {
    return (
        <Box
        w="100%"
        h="100vh"
        borderRight="1px solid gray"
        overflow="scroll"
        >
            {data.map(i => (
                <SideBarItem
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
        borderBottom="1px solid gray"
        py="1.9rem"
        pl="2rem"
        onClick={() => setFocusedExpense(data.name)}
        cursor="pointer"
        borderLeft={"5px solid white"}
        borderLeftColor={focusedExpense === data.name && "#eabc43"}
        >
            <Text
            fontWeight="600"
            >{data.name}</Text>
        </Box>
    )
}

export default SideBar
