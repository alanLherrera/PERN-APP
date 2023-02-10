import React, { Fragment } from 'react'
import "./App.css";

// components
import InputMovie from './Components/InputMovie'

function App(){
  return(
    <Fragment>
      <div className="container">
       <InputMovie/>
      </div>
    </Fragment>
  )
}


export default App;