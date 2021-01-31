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
import { capitalExpenseList } from '../data'
import useUpdateUserData from '../hooks/useUpdateUserData'

const Expense = ({ data, setData, filteredData }) => {
    const [monthlyCAPEX, setMonthlyCAPEX] = useState(0)
    const [annualCAPEX, setAnnualCAPEX] = useState(0)
    const [formInputs, setFormInputs] = useState({
        replacementCost: filteredData.replacementCost,
        lifespan: filteredData.lifespan,
        age: 0,
    })

    const handleInputChange = (e, name) => {
        setFormInputs({
            ...formInputs,
            [name]: parseInt(e.target.value, 10)
        })
    }

    useUpdateUserData({
        data: data,
        inputObj: formInputs,
        filteredData: filteredData,
        setter: setData
    })
    
    const handleMonthlyCAPEX = () => {
        const monthsLeft = (formInputs.lifespan - formInputs.age) * 12;
        const monthlyCost = Math.ceil(formInputs.replacementCost / monthsLeft)
        return isNaN(monthlyCost) || !isFinite(monthlyCost)
        ?
        0
        :
        monthlyCost
    }

    const handleAnnualCAPEX = () => {
        const yearsLeft = formInputs.lifespan - formInputs.age;
        const annualCost = Math.ceil(formInputs.replacementCost / yearsLeft)
        return isNaN(annualCost) || !isFinite(annualCost)
        ?
        0
        :
        annualCost
    }

    const handleClear = () => {
        setFormInputs({
            replacementCost: 0,
            lifespan: 0,
            age: 0,
        })
    }

    const handleDefault = () => {
        const defaultData = capitalExpenseList.filter(i => i.name === filteredData.name)
        setFormInputs({
            replacementCost: defaultData[0]?.replacementCost,
            lifespan: defaultData[0]?.lifespan,
            age: 0,
        })
    }
    
    useEffect(() => {
        setMonthlyCAPEX(handleMonthlyCAPEX)
        setAnnualCAPEX(handleAnnualCAPEX)
    }, [data, formInputs])

    useEffect(() => {
        localStorage.setItem('capexData', JSON.stringify(data));
      }, [data]);
    
    return (
        <Box
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
                value={formInputs.replacementCost}
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
                value={formInputs.lifespan}
                onChange={e => handleInputChange(e, "lifespan")}
                />

                <FormLabel htmlFor="age">Age (years)</FormLabel>
                <Input
                w="20rem"
                mb={8}
                type="number"
                value={formInputs.age}
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
                    <StatNumber>{monthlyCAPEX}</StatNumber>
                </Stat>

                <Stat
                gridColumnStart="2"
                gridColumnEnd="3"
                >
                    <StatLabel>Annual CAPEX</StatLabel>
                    <StatNumber>{annualCAPEX}</StatNumber>
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