import React from 'react'
import { Flex } from '@chakra-ui/react'
import Expense from './expense'

const Main = ({ focusedExpense, expensesData, setFetchedPropertyData }) => {
    
    return (
        <main>
                <Flex
                justifyContent="center"
                mt={10}
                >
                    <Expense
                    expensesData={expensesData}
                    focusedExpense={focusedExpense}
                    setFetchedPropertyData={setFetchedPropertyData}
                    />
            </Flex>
        </main>
    )
}

export default Main
