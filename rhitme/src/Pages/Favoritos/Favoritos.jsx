import React from 'react'
import { Link } from 'react-router-dom'
import Back from '../../Components/Back/Back'
import NavBar from '../../Components/NavBar/NavBar'

const Favoritos = () => {
  return (
    <header className='header'>
    
        <NavBar></NavBar>
        <Link to="/home"><Back></Back></Link>
        <p>Favoritos</p>
        <div className='btnBox'></div>
      </header>
  )
}

export default Favoritos