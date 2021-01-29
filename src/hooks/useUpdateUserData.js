import { useEffect } from 'react'

const useUpdateUserData = ({ key, value, data, filteredData, setter }) => {
    useEffect(() => {
        const newUserInput = [{
            ...filteredData,
            [key]: value
        }]

        const newUserData = data.map(obj => newUserInput.find(o => o.name === obj.name) || obj)
        
        setter({
            loading: false,
            user: newUserData
        })
    }, [value])
}

export default useUpdateUserData
