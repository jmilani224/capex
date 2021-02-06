import { useEffect } from 'react'

const useUpdatePropertyDetails = ({ key, value, data, setter, }) => {
    useEffect(() => {
        const updatedPropertyDetails = {
            ...data,
            [key]: value
        }
        
        setter({
            loading: false,
            user: updatedPropertyDetails
        })
    }, [value])
}

export default useUpdatePropertyDetails
