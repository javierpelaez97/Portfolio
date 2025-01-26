import { useState } from 'react'

import './App.css'
import About from './components/About/About'
import Tecnologias from './components/technologies/Tecnologias'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'

function App() {
  

  return (
    <>
     <div className='bg-dark text-white min-vh-100'>
      <div className='container layout'>
        <About></About>
        <hr />
        <Tecnologias></Tecnologias>
        <Experience></Experience>
        <Projects></Projects>
      </div>

     </div>
    </>
  )
}

export default App
