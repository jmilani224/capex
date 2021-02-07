import React from 'react'
import {
    Switch,
    Route
  } from "react-router-dom";
  import Calculator from './routes/calculator/calculator'
  import PropertyDetails from '../routing/routes/home/propertyDetails'
  import Projections from '../routing/routes/projections/projections'


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
            <Projections
            fetchedPropertyData={fetchedPropertyData} // full propertyDetails, no loading state
            />
        </Route>

        <Route path="/calculator">

          <Calculator
          expensesData={fetchedPropertyData.expenses} // expense data array only
          setFetchedPropertyData={setFetchedPropertyData}
          focusedExpense={focusedExpense}
          setFocusedExpense={setFocusedExpense}
          />
        </Route>
        
        <Route path="/">
            <PropertyDetails
            fetchedPropertyData={fetchedPropertyData} // full propertyDetails, no loading state
            setFetchedPropertyData={setFetchedPropertyData}
            />
        </Route>
      </Switch>
        </>
    )
}

export default RouteSwitch
