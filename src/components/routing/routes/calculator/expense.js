import React, { useState, useEffect } from 'react'
import {
    Heading,
    Box,
    FormLabel,
    Input,
    Stat,
    StatLabel,
    StatNumber,
    Button,
    Grid,
} from '@chakra-ui/react'
import ReplacementOptionsDrawer from './replacementOptions'
import { propertyDetails } from '../../../../data'
import { monthlyCAPEX, annualCAPEX } from '../../../../helpers/totalCAPEX'
import useUpdateExpensesData from '../../../../hooks/useUpdateExpensesData'

const Expense = ({ expensesData, setFetchedPropertyData, focusedExpense }) => {
    const filteredData = expensesData.filter(i => focusedExpense === i.name)[0]

    const [formInputs, setFormInputs] = useState({
        replacementCost: filteredData.replacementCost,
        lifespan: filteredData.lifespan,
        age: filteredData.age,
    })

    const handleInputChange = (e, name) => {
        setFormInputs({
            ...formInputs,
            [name]: parseInt(e.target.value, 10)
        })
    }

    useUpdateExpensesData({
        data: expensesData,
        inputObj: formInputs,
        filteredData: filteredData,
        setter: setFetchedPropertyData
    })


    const handleClear = () => {
        setFormInputs({
            replacementCost: 0,
            lifespan: 0,
            age: 0,
        })
    }

    const handleDefault = () => {
        const defaultData = propertyDetails.expenses.filter(i => i.name === filteredData.name)
        
        setFormInputs({
            replacementCost: defaultData[0]?.replacementCost,
            lifespan: defaultData[0]?.lifespan,
            age: 0,
        })
    }
    
    return (
        <Box
        key={filteredData.name}
        px={24}
        minW="100%"
        >
            <Heading
            mb={8}
            >
                {filteredData.name}
            </Heading>

            <form key={filteredData.name}>
                <FormLabel htmlFor="replaceCost">Replacement Cost (dollars)</FormLabel>
                <Input
                w="20rem"
                mb={8}
                type="number"
                value={filteredData.replacementCost}
                onChange={e => handleInputChange(e, "replacementCost")}
                />

                {filteredData.showReplacementOptions &&
                <ReplacementOptionsDrawer
                filteredData={filteredData}
                formInputs={formInputs}
                setFormInputs={setFormInputs}
                />}

                <FormLabel htmlFor="lifespan">Lifespan (years)</FormLabel>
                <Input
                w="20rem"
                mb={8}
                type="number"
                value={filteredData.lifespan}
                onChange={e => handleInputChange(e, "lifespan")}
                />

                <FormLabel htmlFor="age">Age (years)</FormLabel>
                <Input
                w="20rem"
                mb={8}
                type="number"
                value={filteredData.age}
                onChange={e => handleInputChange(e, "age")}
                />
                
            </form>

            <Grid
            maxW="30rem"
            grid-template-columns="repeat(2, 10rem)"
            grid-template-rows="repeat(2, 10rem)"
            rowGap={8}
            >

                <Stat
                gridColumnStart="1"
                gridColumnEnd="2"
                >
                    <StatLabel>Monthly CAPEX</StatLabel>
                    <StatNumber>{monthlyCAPEX(filteredData)}</StatNumber>
                </Stat>

                <Stat
                gridColumnStart="2"
                gridColumnEnd="3"
                >
                    <StatLabel>Annual CAPEX</StatLabel>
                    <StatNumber>{annualCAPEX(filteredData)}</StatNumber>
                </Stat>



                <Button
                w="70%"
                gridRowStart="2"
                onClick={handleClear}
                >Clear Values
                </Button>

                <Button
                w="70%"
                gridRowStart="2"
                onClick={handleDefault}
                >Reset to Default
                </Button>

        </Grid>
    </Box>    
    )
}

export default Expense