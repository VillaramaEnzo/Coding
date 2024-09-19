import React, { useState, useEffect } from "react";
import PokeList from "./PokeList";

const axios = require('axios');

const App = () =>  {

 const [pokemon, setPokemon] = useState([])

 useEffect(() => {

  axios.get("https://pokiapi.co/api/v2/pokemon").then(res => {

   setPokemon(res.data.results.map(p => p.name))

  }).catch(error => {

   console.log("Error fetching")

  })

 }, [])

 return (

   <PokeList pokemon = {pokemon}/>

  );
}

export default App;
