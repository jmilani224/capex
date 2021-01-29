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
    const [replacementCost, setReplacementCost] = useState(filteredData.replacementCost)
    const [lifespan, setLifespan] = useState(filteredData.lifespan)
    const [age, setAge] = useState(filteredData.age)
    const [monthlyCAPEX, setMonthlyCAPEX] = useState(0)
    const [annualCAPEX, setAnnualCAPEX] = useState(0)
    const [formInputs, setFormInputs] = useState({
        replacementCost: filteredData.replacementCost,
        lifespan: filteredData.lifespan,
        age: 0,
    })

    const handleReplacementCost = e => {
        setReplacementCost(parseInt(e.target.value))
    }

    useUpdateUserData({
        key: "replacementCost",
        value: replacementCost,
        data: data,
        filteredData: filteredData,
        setter: setData
    })

    const handleLifespan = e => {
        setLifespan(parseInt(e.target.value))
    }

    useUpdateUserData({
        key: "lifespan",
        value: lifespan,
        data: data,
        filteredData: filteredData,
        setter: setData
    })

    const handleAge = e => {
        setAge(parseInt(e.target.value))
    }

    useUpdateUserData({
        key: "age",
        value: age,
        data: data,
        filteredData: filteredData,
        setter: setData
    })
    
    const handleMonthlyCAPEX = () => {
        const monthsLeft = (lifespan - age) * 12;
        const monthlyCost = Math.ceil(replacementCost / monthsLeft)
        return isNaN(monthlyCost) || !isFinite(monthlyCost)
        ?
        0
        :
        monthlyCost
    }

    const handleAnnualCAPEX = () => {
        const yearsLeft = lifespan - age;
        const annualCost = Math.ceil(replacementCost / yearsLeft)
        return isNaN(annualCost) || !isFinite(annualCost)
        ?
        0
        :
        annualCost
    }

    const handleClear = () => {
        setReplacementCost(0)
        setLifespan(0)
        setAge(0)
    }

    const handleDefault = () => {
        const defaultData = capitalExpenseList.filter(i => i.name === filteredData.name)
        setReplacementCost(defaultData[0]?.replacementCost)
        setLifespan(defaultData[0]?.lifespan)
        setAge(0)
    }
    

    useEffect(() => {
        setMonthlyCAPEX(handleMonthlyCAPEX)
        setAnnualCAPEX(handleAnnualCAPEX)
    }, [data, replacementCost, lifespan, age])

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
                value={replacementCost}
                onChange={handleReplacementCost}
                />

                {filteredData.showReplacementOptions && <ReplacementOptionsDrawer filteredData={filteredData} setReplacementCost={setReplacementCost} />}

                <FormLabel htmlFor="lifespan">Lifespan (years)</FormLabel>
                <Input
                w="20rem"
                mb={8}
                type="number"
                value={lifespan}
                onChange={handleLifespan}
                />

                <FormLabel htmlFor="age">Age (years)</FormLabel>
                <Input
                w="20rem"
                mb={8}
                type="number"
                value={age}
                onChange={handleAge}
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