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

import { capitalExpenseList as data } from './data'


function App() {

  const [focusedExpense, setFocusedExpense] = useState(data[0]?.name)

  const [totalCost, setTotalCost] = useState(0)
  

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
            />
            
          </Grid>
    </ChakraProvider>
  );
}

export default App;