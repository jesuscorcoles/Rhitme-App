import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {
  return (
    <>
    <div className='menu'>
      <div className='boxesMenu'>

        
        <Link className='iconAndText' to="/entradas">
        <img className='icons' src='/entradas.png'></img>
        <p className='textMenu'>Entradas</p>
        </Link>

        <Link className='iconAndText' to="/buscar">
        <img className='icons' src='/lupa.png'></img>
        <p className='textMenu'>Buscar</p>
        </Link>

        <Link className='iconAndText' to="/">
        <img className='icons' src='/estrella.png'></img>
        <p className='textMenu'>Home</p>
        </Link>

        <Link className='iconAndText' to="/myconcerts">
        <img className='icons' src='/corchea-musical.png'></img>
        <p className='textMenu'>Mis Conciertos</p>
        </Link>

        <Link className='iconAndText' to="/configuration">
        <img className='icons' src='/engranaje.png'></img>
        <p className='textMenu'>Configuración</p>
        </Link>

      </div>
    </div>

    </>
  )
}

export default NavBar