import { useEffect } from 'react'

const useUpdateUserData = ({ inputObj, filteredData, data, setter }) => {
    useEffect(() => {
        const newUserInput = [{
            ...filteredData,
            ...inputObj
        }]

        const newUserData = data.map(obj => newUserInput.find(o => o.name === obj.name) || obj)
        
        setter({
            loading: false,
            user: newUserData
        })
    }, [inputObj])
}

export default useUpdateUserData
