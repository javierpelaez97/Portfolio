
import './App.css'
import About from './components/About/About'
import Tecnologias from './components/technologies/Tecnologias'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import {db} from './database/db.js'
import { useState } from 'react'

function App() {

  const [datos] = useState(db)

  

  return (
    
    <>
     <div className='bg-dark text-white min-vh-100'>
      <div className='container layout'>
        <About></About>
        <hr />
        <Tecnologias></Tecnologias>
        <Experience></Experience>
        <Projects datos = {datos}></Projects>
      </div>
        

     </div>
    </>
    
  )
}

export default App
