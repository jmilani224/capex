import React, { useState } from 'react'
import { Heading, Flex, FormLabel, Input } from '@chakra-ui/react'
import useUpdatePropertyDetails from '../../../../hooks/useUpdatePropertyDetails'

const PropertyDetails = ({ fetchedPropertyData, setFetchedPropertyData }) => {
    const [propertyName, setPropertyName] = useState(fetchedPropertyData.name)
    const [rent, setRent] = useState(fetchedPropertyData.rent)

    useUpdatePropertyDetails({
        key: "name",
        value: propertyName,
        data: fetchedPropertyData,
        setter: setFetchedPropertyData
    })

    useUpdatePropertyDetails({
        key: "rent",
        value: rent,
        data: fetchedPropertyData,
        setter: setFetchedPropertyData
    })

    return (
        <Flex
        p={12}
        direction="column"
        >
            <Heading pb={4}>
                Property Details
            </Heading>
            
            <FormLabel htmlFor="propName">Property Name</FormLabel>
            <Input
            w="20rem"
            mb={8}
            value={propertyName}
            onChange={e => setPropertyName(e.target.value)}
            />

            <FormLabel htmlFor="rent">Rent (in dollars)</FormLabel>
            <Input
            w="20rem"
            type="number"
            mb={8}
            value={rent}
            onChange={e => setRent(parseInt(e.target.value, 10))}
            />
        </Flex>
    )
}

export default PropertyDetails
