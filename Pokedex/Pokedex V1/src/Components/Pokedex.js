import React, { useState, useEffect } from 'react';
import { AppBar, Card, CardContent, CardMedia, CircularProgress, Grid, Toolbar, TextField, Typography, } from '@material-ui/core';

import SearchIcon from "@material-ui/icons/Search";

import { useStyles } from "../Styles/Style";

import axios from 'axios';

import firstCharToUppercase from "./Helper Functions/Capitalise";


export default function Pokedex(props) {

  const { history } = props;
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState({});
  const [filter, setFilter] = useState("");

  const handleSearchChange = (change) => {

    setFilter(change.target.value)

  }

  useEffect(() => {

    axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=898`)
      .then( function (response) {

        const { data } = response;
        const { results } = data;

        const newPokemonData = {};

        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {

            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,

          };
        });
        setPokemonData(newPokemonData);

      });

  }, []);


  function createPokemonCard(pokemonId) {

    const { id, name, sprite } = pokemonData[pokemonId];

    return (

      <Grid item xs = {4} key = {pokemonId}>

        <Card elevation = {3} onClick = {() => history.push(`/${pokemonId}`)}>

          <CardMedia

            className = {classes.cardMedia}
            image = {sprite}
            style = {{ width: "130px", height: "130px"}}

          />

          <CardContent>

            <Typography className = {classes.cardContent}>

            {id}. {firstCharToUppercase(name)}

            </Typography>

          </CardContent>

        </Card>

      </Grid>

    );

  }

  return (

    <>

      <AppBar position = "static">

        <Toolbar>

          <div className = {classes.searchContainer}>

          <SearchIcon className = {classes.searchIcon} />
          <TextField
            onChange = {handleSearchChange}
            className = {classes.searchInput}
            label = "Pokemon"
            variant = "standard"

          />

          </div>

        </Toolbar>

      </AppBar>

      { pokemonData ? (

        <Grid container spacing = {2} className = {classes.pdContainer}>

          {Object.keys(pokemonData).map((pokemonId) =>

            pokemonData[pokemonId].name.includes(filter.toLowerCase()) &&

              createPokemonCard(pokemonId)

          )}

        </Grid>

      ) : (

        <CircularProgress />

      )

      }


    </>

  );
}
