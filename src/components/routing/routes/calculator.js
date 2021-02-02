import React from 'react'
import { Grid } from '@chakra-ui/react'
import SideBar from '../../sideBar'
import Main from '../../main'

const Calculator = ({ data, setData, setFocusedExpense, focusedExpense}) => {
    return (
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
    )
}

export default Calculator
