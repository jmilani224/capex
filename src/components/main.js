import React from 'react'
import { Flex } from '@chakra-ui/react'
import Expense from './expense'

const Main = ({ focusedExpense, data, setData }) => {
    const filteredData = data.filter(i => focusedExpense === i.name)[0]
    
    return (
        <main>
                <Flex
                justifyContent="center"
                mt={10}
                >
                    <Expense
                    key={filteredData.name}
                    filteredData={filteredData}
                    data={data}
                    setData={setData}
                    />
            </Flex>
        </main>
    )
}

export default Main
