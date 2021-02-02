import React from 'react'
import {
    Switch,
    Route
  } from "react-router-dom";

const RouteSwitch = ({ CalculatorRoute, Outlook }) => {
    return (
        <>
            <Switch>
        <Route path="/outlook">
            <div>Outlook</div>
        </Route>

        <Route path="/calculator">
          {CalculatorRoute}
        </Route>
        
        <Route path="/">
            <div>Home</div>
        </Route>
      </Switch>
        </>
    )
}

export default RouteSwitch
