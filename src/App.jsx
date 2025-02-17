
import './App.css'
import About from './components/About/About'
import Tecnologias from './components/technologies/Tecnologias'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import {db} from './database/db.js'
import { useState } from 'react'
import Formation from './components/formation/Formation.jsx'

function App() {

  const [datos] = useState(db)

  

  return (
    
    <>
    <main className='bg-dark text-white'>
     <div className=' min-vh-100'>
      <div className='container layout'>
        <About></About>
        <hr />
        <Tecnologias></Tecnologias>
        <hr />
        <Experience></Experience>
        <hr />
        <Formation></Formation>
        <hr />
        <Projects datos = {datos}></Projects>
      </div>
     </div>
    </main>
    <footer className='bg-dark text-white d-flex justify-content-center '> 
      <h3>Javier Pelaez 2025</h3>
    </footer>

    </>
    
  )
}

export default App
