import React, { useState } from 'react';

import { Button, Box, Drawer } from '@material-ui/core';


export default function TestDrawer ({ state, funct, history }) {


  return (

    <>

    <Drawer variant = "persistent" anchor = 'right' open = {state} onClose = { funct }>

    <Box sx = {{

      height: "100%",
      width: "24rem",
      padding: "12px"


    }}>


    <Button size = "small" onClick = {funct}> Close Drawer </Button>

    <div>
      <Button size = "small" onClick = {() => history.push('/')}> Home </Button>
      <Button size = "small" onClick = {() => history.push('/test')}> Change Page Test </Button>
    </div>

    </Box>

    </Drawer>

    </>

  )


}
