import React from 'react'
import {
    Box
} from '@chakra-ui/react'
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
            expensesDue: {
                allExpenses: getExpensesDue(i),
                totalCost: getTotalDue(i),
            },
            capexOnHand: getCapexOnHand(i),
            margin: getMargin(i),
        })
    }

    console.log(chartArr)
    return (
        <Box>

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