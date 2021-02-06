import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  theme,
  Spinner,
  Flex,
  Box
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/header/header'
import RouteSwitch from './components/routing/routeSwitch'

import { propertyDetails } from './data'

function App() {
  
  const [focusedExpense, setFocusedExpense] = useState(propertyDetails.expenses[0]?.name)
  
  const [fetchedPropertyData, setFetchedPropertyData] = useState({
    loading: true,
    user: []
  })

useEffect(() => {
  if (!localStorage.getItem('capexData')) {
    localStorage.setItem('capexData', JSON.stringify(propertyDetails));
  }
  setFetchedPropertyData({
      loading: false,
      user: JSON.parse(localStorage.getItem('capexData'))
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('capexData', JSON.stringify(fetchedPropertyData.user))
    }, [fetchedPropertyData])

  //fetchedPropertyData = full propertyDetails from localStorage + loading state
  
  if (fetchedPropertyData.loading) return (
    <Flex
    justifyContent="center"
    alignItems="center"
    w="100vw"
    h="100vh"
    >
        <Spinner
          w={24}
          h={24}
          size="lg"/>
    </Flex>
  )

  return (
    <ChakraProvider theme={theme}>
          <Header />

          <RouteSwitch
          fetchedPropertyData={fetchedPropertyData.user} //fetchedPropertyData = full propertyDetails, no loading state
          setFetchedPropertyData={setFetchedPropertyData}
          setFocusedExpense={setFocusedExpense}
          focusedExpense={focusedExpense}
          />

    </ChakraProvider>
  );
}

export default App;