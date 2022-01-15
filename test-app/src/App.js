import React from 'react';
import { Route, Switch } from "react-router-dom";

import HomePage from './Pages/Home';
import TestPage from './Pages/TestPage'

function App() {
  return (

    <Switch>

    <Route exact path = "/" render = {(props) => <HomePage {...props} />}/>
    <Route exact path = "/test" render = {(props) => <TestPage {...props} />}/>

    </Switch>

  );
}

export default App;
