import React from 'react';
import { Route, Switch} from "react-router-dom";
import Pokedex from "./Components/Pokedex";
import Pokemon from "./Components/Pokemon";

export default function App() {
  return (

    <Switch>
    <Route exact path="/" render={(props) => <Pokedex {...props} />} />
    <Route
      exact
      path="/:pokemonId"
      render={(props) => <Pokemon {...props} />}
    />
  </Switch>

  );

}
