import React, { useState } from 'react';

import { Button } from '@material-ui/core';

import MenuBar from '../Components/Menu'


export default function HomePage(props){

  const { history } = props;

  return (
    <>

    <MenuBar history = { history }/>

    <div>
    Home Page
    </div>

    </>
  )


}
