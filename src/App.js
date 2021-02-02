import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  theme,
  Grid,
  Spinner,
  Flex,
  Box
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/header/header'
import RouteSwitch from './components/routing/routeSwitch'
import Calculator from './components/routing/routes/calculator/calculator'

import { capitalExpenseList } from './data'

function App() {
  
  const [focusedExpense, setFocusedExpense] = useState(capitalExpenseList[0]?.name)
  
  const [data, setData] = useState({
    loading: true,
    user: []
  })

  const CalculatorRoute = 
(<Calculator
  data={data.user}
  setFocusedExpense={setFocusedExpense}
  focusedExpense={focusedExpense}
  setData={setData}
  />)

useEffect(() => {
    setData({
      loading: false,
      user: JSON.parse(localStorage.getItem('capexData')) || capitalExpenseList
    })
  }, [])

  if (data.loading) return (
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
          CalculatorRoute={CalculatorRoute}
          />

    </ChakraProvider>
  );
}

export default App;