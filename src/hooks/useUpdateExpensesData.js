import { useEffect } from 'react'

const useUpdateExpensesData = ({ inputObj, filteredData, data, setter }) => {

    const fetchedData = JSON.parse(localStorage.getItem('capexData'))

    useEffect(() => {
        const newUserInput = [{
            ...filteredData,
            ...inputObj
        }]

        const newUserData = data.map(obj => newUserInput.find(o => o.name === obj.name) || obj)

        const updatedPropertyData = {
            ...fetchedData,
            expenses: newUserData
        }
        
        setter({
            loading: false,
            user: updatedPropertyData
        })
    }, [inputObj])
}

export default useUpdateExpensesData
