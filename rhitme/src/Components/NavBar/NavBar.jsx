import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {
  return (
    <>
    <div className='menu'>
      <div className='boxesMenu'>

        
        <NavLink activeclassname={"active"} className='iconAndText' to="/entradas">
        <img className='icons' src='/entradas.png'></img>
        <p className='textMenu'>Entradas</p>
        </NavLink>

        <NavLink activeclassname={"active"} className='iconAndText' to="/favoritos">
        <img className='icons' src='/corazon.png'></img>
        <p className='textMenu'>Favoritos</p>
        </NavLink>

        <NavLink activeclassname={"active"} className='iconAndText' to="/">
        <img className='icons' src='/estrella.png'></img>
        <p className='textMenu'>Home</p>
        </NavLink>

        <NavLink  className='iconAndText' to="/ticketdetail">
        <img className='icons' src='/corchea-musical.png'></img>
        <p className='textMenu'>Mis Conciertos</p>
        </NavLink>

        <NavLink className='iconAndText' to="/configuration">
        <img className='icons' src='/engranaje.png'></img>
        <p className='textMenu'>Configuración</p>
        </NavLink>

      </div>
    </div>

    </>
  )
}

export default NavBar