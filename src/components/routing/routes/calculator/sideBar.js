import React, { useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useMonthlyCAPEX, useAnnualCAPEX } from '../../../../hooks/useTotalCAPEX'

const SideBar = ({ expensesData, focusedExpense, setFocusedExpense }) => {
    return (
        <Box
        w="100%"
        h="100vh"
        borderRight="1px solid"
        borderColor="gray.100"
        overflow="scroll"
        >
            {expensesData.map((i, index, arr) => (
                <SideBarItem
                key={i.name}
                item={i}
                setFocusedExpense={setFocusedExpense}
                focusedExpense={focusedExpense}
                index={index}
                arr={arr}
                />
            ))}
        </Box>
    )
}

const SideBarItem = ({ item, focusedExpense, setFocusedExpense, index, arr }) => {

    const [arrStatus, setArrStatus] = useState({index: index, arr:arr})

    //const [index, arr] = arrStatus

    return (
        <Box
        py="0.8rem"
        pl="2rem"
        onClick={() => setFocusedExpense(item.name)}
        //onFocus={() => setFocusedExpense(data.name)}
        onKeyDown={e => {
            if (e.key === "ArrowDown") {
                setFocusedExpense(arrStatus.arr[arrStatus.index + 1]?.name || item.name)
            }
            if (e.key === "ArrowUp") {
                setFocusedExpense(arrStatus.arr[arrStatus.index - 1]?.name || item.name)
            }
        }}
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
                ${useMonthlyCAPEX(item)} | ${useAnnualCAPEX(item)}
            </Text>
        </Box>
    )
}

export default SideBar
