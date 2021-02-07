import React, { useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { monthlyCAPEX, annualCAPEX } from '../../../../helpers/totalCAPEX'

const SideBar = ({ expensesData, focusedExpense, setFocusedExpense }) => {
    return (
        <Box
        w="100%"
        h="100vh"
        borderRight="1px solid"
        borderColor="gray.100"
        overflow="scroll"
        >
            {expensesData.map(i => (
                <SideBarItem
                key={i.name}
                item={i}
                setFocusedExpense={setFocusedExpense}
                focusedExpense={focusedExpense}
                />
            ))}
        </Box>
    )
}

const SideBarItem = ({ item, focusedExpense, setFocusedExpense }) => {

    return (
        <Box
        py="0.8rem"
        pl="2rem"
        onClick={() => setFocusedExpense(item.name)}
        cursor="pointer"
        backgroundColor={focusedExpense === item.name && "gray.100"}
        borderBottom="1px solid"
        borderColor="gray.100"
        tabIndex="0"
        >
            <Text
            fontWeight="600"
            >{item.name}
            </Text>
            <Text
            fontWeight="400"
            color="gray.600"
            >
                ${monthlyCAPEX(item)} | ${annualCAPEX(item)}
            </Text>
        </Box>
    )
}

export default SideBar
