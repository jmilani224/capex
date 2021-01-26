import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  theme,
  Grid,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/header'
import SideBar from './components/sideBar';
import Main from './components/main'

import { capitalExpenseList } from './data'


function App() {
  useEffect(() => {
    localStorage.setItem('setData', JSON.stringify(capitalExpenseList));
  }, [])

  let retrievedData = JSON.parse(localStorage.getItem('setData'));

  const [totalCost, setTotalCost] = useState(0)
  const [data, setData] = useState(retrievedData)
  const [focusedExpense, setFocusedExpense] = useState(data[0].name)

  return (
    <ChakraProvider theme={theme}>
          <Header />
          <Grid
          templateColumns="1fr 3fr"
          >
            <SideBar
            data={data}
            setFocusedExpense={setFocusedExpense}
            focusedExpense={focusedExpense}
            />
            
            <Main
            focusedExpense={focusedExpense}
            data={data}
            setData={setData}
            />
            
          </Grid>
    </ChakraProvider>
  );
}

export default App;