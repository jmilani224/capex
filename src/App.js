import React, { useState } from 'react';
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
  const [totalCost, setTotalCost] = useState(0)
  const [focusedExpense, setFocusedExpense] = useState(capitalExpenseList[0].name)

  return (
    <ChakraProvider theme={theme}>
          <Header />
          <Grid
          templateColumns="1fr 3fr"
          >
            <SideBar
            data={capitalExpenseList}
            setFocusedExpense={setFocusedExpense}
            focusedExpense={focusedExpense}
            />
            
            <Main
            focusedExpense={focusedExpense}
            data={capitalExpenseList}
            />
            
          </Grid>
    </ChakraProvider>
  );
}

export default App;
