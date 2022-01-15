import React, { useState } from 'react';

import { Button, Box, Drawer, MenuItem, Select, TextField } from '@material-ui/core';


export default function TestDrawer({ state, funct, textt , t}) {

  const [editState, setEditState] = useState(false);

  const [text, setText] = useState('blah blah blah')
  const [text2, setText2] = useState('blah blah blah')



  const obj = {

    val: text


  }


  const toggleEdit = () => {

    setEditState(!editState);

  }


  const saveEdits = () => {

    toggleEdit()

    console.log("Edits Saved")

    setText(document.getElementById("text").value)
    setText2(document.getElementById("text2").value)

    textt(document.getElementById('text3').value)

  }

  const cancelEdits = () => {

    toggleEdit()

    console.log("Edits Cancelled ")


  }

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {

    setAge(event.target.value);

  };


  return(


    <div>

    <Drawer variant = "persistent" anchor = 'right' open = {state} onClose = { funct }>

    <Box sx = {{

      height: "100%",
      width: "24rem",
      padding: "12px"

    }}>


    {editState === false &&
      <>
      <Button onClick = {() => toggleEdit()}> Edit </Button>

      {console.log(obj.val)}

      <p> Not Editing </p>
      <p> {text} </p>
      <p> {text2} </p>
      <p> {t} </p>

      </>

    }

    {editState === true &&

      <>

      <Button onClick = {() => saveEdits()}> Save Edits </Button>
      <Button onClick = {() => cancelEdits()}> Cancel Edits </Button>

      <p> Editing </p>

      <TextField id = "text" multiline defaultValue = {text} rows = {4} fullWidth />
      <TextField id = "text2" multiline defaultValue = {text2} rows = {4} fullWidth />
      <TextField id = "text3" multiline defaultValue = {t} rows = {4} fullWidth />

      <Select
        value={age}
        label={age}
        onChange={handleChange}
        >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>

      </Select>

      {console.log(age)}

      </>


    }



    </Box>

    </Drawer>

    </div>


  )


}
