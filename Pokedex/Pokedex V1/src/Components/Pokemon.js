import React, { useState, useEffect } from 'react';
import { Button, CircularProgress, Link, Typography } from '@material-ui/core';
import axios from 'axios';

import firstCharToUppercase from "./Helper Functions/Capitalise";

export default function Pokemon(props) {

  const { history, match } = props;
  const { params } = match;
  const { pokemonId } = params

  const [pokemon, setPokemon] = useState(undefined);


  useEffect(() => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
    .then(function (response) {
      const { data } = response;
      setPokemon(data);
    })
    .catch(function (error) {
      setPokemon(false);
    });
}, [pokemonId]);


  function generatePokemonJSX() {

    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;

    return (

      <>
            <Typography variant="h1">
              {`${id}.`} {firstCharToUppercase(name)}
              <img src={front_default} alt = {name}/>
            </Typography>
            <img style={{ width: "300px", height: "300px" }} src={fullImageUrl}/>
            <Typography variant="h3">Pokemon Info</Typography>
            <Typography>
              {"Species: "}
              <Link href={species.url}>{species.name} </Link>
            </Typography>
            <Typography>Height: {height} </Typography>
            <Typography>Weight: {weight} </Typography>
            <Typography variant="h6"> Types:</Typography>
            {types.map((typeInfo) => {
              const { type } = typeInfo;
              const { name } = type;
              return <Typography key={name}> {`${name}`}</Typography>;
            })}
          </>

    )

  }

  return (
    <>

      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
      {pokemon === false && <Typography> Pokemon not found</Typography>}

      {pokemon !== undefined && (
        <Button variant="contained" onClick={() => history.push("/")}>
          back to pokedex
        </Button>
      )}

    </>

  );

}
