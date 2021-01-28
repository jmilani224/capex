import { useEffect } from 'react'

const useUpdateUserData = (key, input, data, filteredData, setter) => {
    useEffect(() => {
        const newUserInput = [{
            ...filteredData,
            [key]: input
        }]
        
        const newUserData = data.map(obj => newUserInput.find(o => o.name === obj.name) || obj)

        setter({
            loading: false,
            user: newUserData
        })
    }, [input])
}

export default useUpdateUserData
