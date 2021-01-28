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
import Header from './components/header'
import SideBar from './components/sideBar';
import Main from './components/main'

import { capitalExpenseList } from './data'


function App() {
  
  const [focusedExpense, setFocusedExpense] = useState(capitalExpenseList[0]?.name)
  
  const [data, setData] = useState({
    loading: true,
    user: []
  })

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
          <Grid
          templateColumns="1fr 3fr"
          >
            <SideBar
            data={data.user}
            setFocusedExpense={setFocusedExpense}
            focusedExpense={focusedExpense}
            />
            
            <Main
            focusedExpense={focusedExpense}
            data={data.user}
            setData={setData}
            />
            
          </Grid>
    </ChakraProvider>
  );
}

export default App;