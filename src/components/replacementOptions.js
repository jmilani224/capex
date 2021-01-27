import React, { useState, useEffect, useRef } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Box,
    Input,
    Select,
    FormLabel,
    Stat,
    StatLabel,
    StatNumber,
    Tooltip,
    useToast
  } from "@chakra-ui/react"
  import useDidMountEffect from '../hooks/useDidMountEffect'

const ReplacementOptionsDrawer = ({ data, setReplacementCost }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const toast = useToast()

    const [selectedOption, setSelectedOption] = useState('')
    const [selectedOptionArr, setSelectedOptionArr] = useState([])
    const [units, setUnits] = useState(0)
    const [unitCost, setUnitCost] = useState(0)
    const [itemNote, setItemNote] = useState('Select a product.')
    const [totalCost, setTotalCost] = useState(0)
    

    const handleSelectOption = e => {
        setSelectedOption(e.target.value)
    }

    useEffect(() => {
        setSelectedOptionArr(data.replacementOptions.filter(i => i.name === selectedOption))
    }, [selectedOption])

    useDidMountEffect(() => {
        setUnits(selectedOptionArr[0]?.units)
        setUnitCost(selectedOptionArr[0]?.unitCost)
        setItemNote(selectedOptionArr[0]?.note)
    }, [selectedOptionArr])

    useEffect(() => {
        setTotalCost(units * unitCost)
    }, [units, unitCost])

    return (
        <Box
        mt={-4}
        mb={8}
        >
            <Button ref={btnRef} colorScheme="gray" onClick={onOpen}>
        Replacement Cost Assistant
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Replacement Cost <br />Assistant</DrawerHeader>

            <DrawerBody>
            <Box>
                <Tooltip label={itemNote} aria-label="A tooltip">
                
            
                    <Select
                    placeholder="Select option"
                    mb={8}
                    value={selectedOption}
                    onChange={handleSelectOption}
                    >
                        {data.replacementOptions.map( i => (
                            <option key={i.name} value={i.name}>{i.name}</option>
                        ))}
                    </Select>
                </Tooltip>
                <FormLabel htmlFor="units">Number of units ({data.unit})</FormLabel>
                <Input
                type="number"
                mb={8}
                value={units}
                onChange={e => {
                    setUnits(e.target.value)
                }}
                />
                <FormLabel htmlFor="unitCost">Price per {data.unit} (dollars)</FormLabel>
                <Input
                type="number"
                mb={8}
                value={unitCost}
                onChange={e => {
                    setUnitCost(e.target.value)
                }}
                />
            </Box>
            <Stat>
                    <StatLabel>Total Replacement Cost</StatLabel>
                    <StatNumber>{isNaN(totalCost) ? 0 : totalCost}</StatNumber>
                </Stat>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button color="blue" onClick={() => {
                  onClose()
                  setReplacementCost(totalCost)
                  toast({
                    title: "Replacement Cost Updated",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                  })
                  }}>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
        </Box>
    )
}

export default ReplacementOptionsDrawer
