export const useMonthlyCAPEX = (data) => {
    const monthsLeft = (data.lifespan - data.age) * 12;
    const monthlyCost = Math.ceil(data.replacementCost / monthsLeft)
    return isNaN(monthlyCost) || !isFinite(monthlyCost)
    ?
    0
    :
    monthlyCost
}

export const useAnnualCAPEX = (data) => {
    const yearsLeft = data.lifespan - data.age;
    const annualCost = Math.ceil(data.replacementCost / yearsLeft)
    return isNaN(annualCost) || !isFinite(annualCost)
    ?
    0
    :
    annualCost
}