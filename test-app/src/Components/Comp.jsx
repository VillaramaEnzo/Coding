import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import TestDrawer from './TestDrawer1'

const obj = {

  var1: 1,
  var2: 2,
  var3: "Hello"

}


function State1({ funct }){

  return <Button onClick = { funct }> Edit </Button>

}

const State2 = (props) => {

  return (
    <>
    <Button onClick = {props.funct}> Save Edits </Button>
    <Button onClick = {props.funct}> Cancel Edits </Button>
    </>
)
}


export default function Comp(){

  const [edit, setEditState] = useState(false)

  const [state, setState] = useState(false)

  const [t, sett] = useState('');

  const toggleDrawer = () => {

    console.log(state);

    setState(!state);

  }


  return(

    <div>
      {edit === false && (
        <>

        <State1 funct = {() => setEditState(true)} />

        <h1> State 1 </h1>

        <Button onClick = {() => toggleDrawer() }> Open Drawer </Button>

        <TestDrawer state = { state } funct = {() => toggleDrawer()} textt = {sett} t = {t}/>

        <div> {t} </div>

        </>

      )}

      {edit === true && (
        <>

        <State2 funct = {() => setEditState(false)} />

        <div> State 2 </div>

        <div> {obj.var1} </div>

        </>

      )}

    </div>


  )

}
