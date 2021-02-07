import React from 'react'
import {
    Box,
    Heading,
    Stat,
    StatLabel,
    StatNumber,
    Flex
} from '@chakra-ui/react'
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
  } from 'recharts';
import { monthlyCAPEX } from '../../../../helpers/totalCAPEX'


const Projections = ({ fetchedPropertyData }) => {


    const totalMonthlyCAPEX = fetchedPropertyData.expenses?.reduce((accum, current) => accum + monthlyCAPEX(current), 0) //for each expense, calculate the monthly amount (helperfunc) and add them together

    const monthlyMargin = fetchedPropertyData.rent - (fetchedPropertyData.mortgage + totalMonthlyCAPEX)

    const expenseLifeLeftArr = fetchedPropertyData.expenses?.map(i =>{
        return {
                name: i.name,
                monthNumber: (i.lifespan - i.age) * 12,
                cost: i.replacementCost
                }
    })

    const getExpensesDue = i => {
        return expenseLifeLeftArr.filter(item => item.monthNumber === i + 1)
    }

    const getTotalDue = i => {
        return getExpensesDue(i)?.reduce((accum, current) => accum + current.cost, 0)
    }

    const getCapexOnHand = i => {
        const onHand = i === 0 ? totalMonthlyCAPEX : (totalMonthlyCAPEX + chartArr[i - 1].capexOnHand)
        if (!getTotalDue(i)) {
            return onHand
        }
        return onHand - getTotalDue(i)
    }

    const getMargin = i => {
        const margin = i === 0 ? monthlyMargin : monthlyMargin + (chartArr[i - 1].margin)
        if (getCapexOnHand(i) < 0) {
            return getCapexOnHand(i) + margin
        }
        return margin
    }

    let chartArr = []
    let i
    for (i = 0; i <= 59; i++) {
        
        chartArr.push({
            month: i + 1,
            expensesDue: getExpensesDue(i),
            totalDue: getTotalDue(i),
            capexOnHand: getCapexOnHand(i),
            margin: getMargin(i),
        })
    }

    return (
        <Box p={8}>
            <Heading pb={8}>
                Projected Expenses and Margin for {fetchedPropertyData.propertyName}
            </Heading>
            <Flex w="60vw">
                <Stat pb={8}>
                    <StatLabel>Total Monthly CAPEX</StatLabel>
                    <StatNumber>${totalMonthlyCAPEX}</StatNumber>
                </Stat>

                <Stat pb={8}>
                    <StatLabel>Total Monthly Margin</StatLabel>
                    <StatNumber>${monthlyMargin}</StatNumber>
                </Stat>
            </Flex>

            <ComposedChart
                width={800}
                height={600}
                data={chartArr}
                margin={{
                top: 20, right: 20, bottom: 20, left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="capexOnHand" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="totalDue" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="margin" dot={false} stroke="#ff7300" />
                {/* <Scatter dataKey="cnt" fill="red" /> */}
            </ComposedChart>
        </Box>
    )
}

export default Projections

/*
Shape of the data:

const data = [
    {month: 1, capexOnHand: 200, margin: 500, expense: 0}
]

capexOnHand = total monthly capex for all expenses + previous month's total - any expenses that are due (could be a negative number, in which case you add it to the total profit number))

total margin = (rent - mortgage + negative onhand capex value (if negative))

expense: lifespan - age = years left * 12 (months left). When number of months left === number of months between projected date - purchase date, set expense === replacementCost

*/