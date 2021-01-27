import React, { useState, useEffect } from 'react'
import {
    Heading,
    Box,
    FormLabel,
    Input,
    Flex,
    Stat,
    StatLabel,
    StatNumber,
    Button,
} from '@chakra-ui/react'
import ReplacementOptionsDrawer from './replacementOptions'

const Expense = ({ data }) => {
    const [replacementCost, setReplacementCost] = useState(data.replacementCost)
    const [lifespan, setLifespan] = useState(data.lifespan)
    const [age, setAge] = useState(0)
    const [monthlyCAPEX, setMonthlyCAPEX] = useState(0)
    const [annualCAPEX, setAnnualCAPEX] = useState(0)
    
    const handleMonthlyCAPEX = () => {
        const monthsLeft = (lifespan - age) * 12;
        const monthlyCost = Math.ceil(replacementCost / monthsLeft)
        return isNaN(monthlyCost) ? 0 : monthlyCost
    }

    const handleAnnualCAPEX = () => {
        const yearsLeft = lifespan - age;
        const annualCost = Math.ceil(replacementCost / yearsLeft)
        return isNaN(annualCost) ? 0 : annualCost
    }

    const handleClear = () => {
        setReplacementCost(0)
        setLifespan(0)
        setAge(0)
    }

    const handleDefault = () => {
        setReplacementCost(data.replacementCost)
        setLifespan(data.lifespan)
        setAge(0)
    }


    useEffect(() => {
        setMonthlyCAPEX(handleMonthlyCAPEX)
        setAnnualCAPEX(handleAnnualCAPEX)
    }, [data, replacementCost, lifespan, age])
    
    return (
        <Box
        px={24}
        minW="100%"
        >
            <Heading
            mb={8}
            >
                {data.name}
            </Heading>

            <form key={data.name}>
                <FormLabel htmlFor="replaceCost">Replacement Cost (dollars)</FormLabel>
                <Input
                w="20rem"
                mb={8}
                type="number"
                value={replacementCost}
                onChange={e => setReplacementCost(e.target.value)}
                />

                {data.showReplacementOptions && <ReplacementOptionsDrawer data={data} setReplacementCost={setReplacementCost} />}

                <FormLabel htmlFor="lifespan">Lifespan (years)</FormLabel>
                <Input
                w="20rem"
                mb={8}
                type="number"
                value={lifespan}
                onChange={e => setLifespan(e.target.value, 10)}
                />

                <FormLabel htmlFor="age">Age (years)</FormLabel>
                <Input
                w="20rem"
                mb={8}
                type="number"
                value={age}
                onChange={e => setAge(e.target.value, 10)}
                />
                
            </form>

            <Flex>

                <Stat>
                    <StatLabel>Monthly CAPEX</StatLabel>
                    <StatNumber>{monthlyCAPEX}</StatNumber>
                </Stat>

                <Stat>
                    <StatLabel>Annual CAPEX</StatLabel>
                    <StatNumber>{annualCAPEX}</StatNumber>
                </Stat>

            </Flex>

            <Box
            mt={8}
            >
                <Button
                mr={12}
                onClick={handleClear}
                >Clear Values</Button>
                <Button
                mr={12}
                onClick={handleDefault}
                >Reset to Default</Button>
            </Box>

        </Box>
    )
}

export default Expense