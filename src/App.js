import React, { useState } from 'react';
import {
  ChakraProvider,
  theme,
  Grid,
  SimpleGrid,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Expense from './components/expense'
import TotalCost from './components/totalCost'
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
          <SimpleGrid
          columns={2}
          >
            <SideBar
            data={capitalExpenseList}
            setFocusedExpense={setFocusedExpense}
            focusedExpense={focusedExpense}
            />
            
            <Main />
            
          </SimpleGrid>
    </ChakraProvider>
  );
}

export default App;
