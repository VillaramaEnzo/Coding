import React from 'react';

import MenuBar from '../Components/Menu'

export default function TestPage(props){

  const { history } = props;

  return (
    <>

    <MenuBar history = {history} />

    <div>
    Test Page
    </div>

    </>
  )


}
