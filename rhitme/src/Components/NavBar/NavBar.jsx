import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {
  return (
    <>
    <div className='menu'>
      <div className='boxesMenu'>

        <Link className='itemsMenu' to="/entradas">Entradas</Link>
        <Link className='itemsMenu' to="/">Buscar</Link>
        <Link className='itemsMenu' to="/">Home</Link>
        <Link  className='itemsMenu itemsMenu--larges' to="/">Mis Conciertos</Link>
        <Link  className='itemsMenu' to="/">Configuración</Link>

      </div>
    </div>

    </>
  )
}

export default NavBar