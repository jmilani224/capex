export const monthlyCAPEX = (data) => {
    const monthsLeft = (data.lifespan - data.age) * 12;
    const monthlyCost = Math.ceil(data.replacementCost / monthsLeft)
    return isNaN(monthlyCost) || !isFinite(monthlyCost)
    ?
    0
    :
    monthlyCost
}

export const annualCAPEX = (data) => {
    const yearsLeft = data.lifespan - data.age;
    const annualCost = Math.ceil(data.replacementCost / yearsLeft)
    return isNaN(annualCost) || !isFinite(annualCost)
    ?
    0
    :
    annualCost
}

export const totalMonthlyCAPEX = (expensesArr) => {
    //for each expense, calculate the monthly amount (helper) and add them together
        return expensesArr.reduce((accum, current) => accum + monthlyCAPEX(current), 0)
        
    }