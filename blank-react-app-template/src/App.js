import React from 'react';
import { Route, Switch } from "react-router-dom";


function App() {
  return (

    <Switch>

    <Route exact path = "/" render = {() =>

      <div className="App">

        Test App

      </div>

    }/>

    </Switch>

  );
}

export default App;
