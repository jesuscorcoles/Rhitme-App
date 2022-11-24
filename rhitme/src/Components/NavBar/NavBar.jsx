import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {
  return (
    <>
    <div className='menu'>
      <div className='boxesMenu'>

        <div className='iconAndText'>
        <img className='icons' src='/entradas.png'></img>
        <Link className='itemsMenu' to="/">Entradas</Link>
        </div>

        <div className='iconAndText'>
        <img className='icons' src='/lupa.png'></img>
        <Link className='itemsMenu' to="/">Buscar</Link>
        </div>

        <div className='iconAndText'>
        <img className='icons' src='/estrella.png'></img>
        <Link className='itemsMenu' to="/">Home</Link>
        </div>

        <div className='iconAndText'>
        <img className='icons' src='/corchea-musical.png'></img>
        <Link  className='itemsMenu itemsMenu--larges' to="/">Mis Conciertos</Link>
        </div>

        <div className='iconAndText'>
        <img className='icons' src='/engranaje.png'></img>
        <Link  className='itemsMenu' to="/">Configuración</Link>
        </div>

      </div>
    </div>

    </>
  )
}

export default NavBar