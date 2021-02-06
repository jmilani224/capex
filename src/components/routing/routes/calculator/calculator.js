import React from 'react'
import { Grid } from '@chakra-ui/react'
import SideBar from '../calculator/sideBar'
import Main from './main'

const Calculator = ({
  expensesData,
  setFetchedPropertyData,
  setFocusedExpense,
  focusedExpense
  }) => {

  return (
        <Grid
          templateColumns="1fr 3fr"
          >
            <SideBar
            expensesData={expensesData}
            focusedExpense={focusedExpense}
            setFocusedExpense={setFocusedExpense}
            />
            
            <Main
            expensesData={expensesData}
            setFetchedPropertyData={setFetchedPropertyData}
            focusedExpense={focusedExpense}
            />
            
          </Grid>
    )
}

export default Calculator
