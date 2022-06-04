import React from 'react'
import "./App.css"
import Display from './Components/Display/Display'
import Form from './Components/Form/Form'
import Nav from './Components/Navbar/Nav'

function App() {
  return (
    <div className='main'>
      <Nav/>
      <Form/>
<Display/>
    </div>
  )
}

export default App