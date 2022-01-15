import React, { useState } from 'react';

import { AppBar, Button, CssBaseline, Toolbar } from '@material-ui/core'

import TestDrawer from "./Drawer";

export default function MenuBar ({ history }) {

  const [state, setState] = useState(false);

  const toggleDrawer = () => {

    setState(!state);

  }

  return (

    <>

    <CssBaseline />

    <AppBar position = "static">

    <Toolbar>

    <Button onClick = {() => toggleDrawer()}> Open Drawer </Button>

    </Toolbar>

    </AppBar>
    <TestDrawer state = { state } funct = {() => toggleDrawer()} history = { history }/>

    </>


  )

}
