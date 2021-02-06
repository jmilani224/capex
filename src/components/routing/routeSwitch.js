import React from 'react'
import {
    Switch,
    Route
  } from "react-router-dom";
  import Calculator from './routes/calculator/calculator'
  import PropertyDetails from '../routing/routes/home/propertyDetails'

const RouteSwitch = ({
  fetchedPropertyData,
  setFetchedPropertyData,
  focusedExpense,
  setFocusedExpense,
}) => {
    return (
        <>
            <Switch>
        <Route path="/projections">
            <div>Projections</div>
        </Route>

        <Route path="/calculator">

          <Calculator
          expensesData={fetchedPropertyData.expenses} // expense data array for property only
          setFetchedPropertyData={setFetchedPropertyData}
          focusedExpense={focusedExpense}
          setFocusedExpense={setFocusedExpense}
          />
        </Route>
        
        <Route path="/">
            <PropertyDetails
            fetchedPropertyData={fetchedPropertyData}
            setFetchedPropertyData={setFetchedPropertyData}
            />
        </Route>
      </Switch>
        </>
    )
}

export default RouteSwitch
