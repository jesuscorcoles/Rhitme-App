import React from 'react'
import { Link } from 'react-router-dom'
import Back from '../../Components/Back/Back'
import NavBar from '../../Components/NavBar/NavBar'
import './ConfigurationPage.scss';
const ConfigurationPage = () => {
  return (

    <div>
      <NavBar></NavBar>
      <header className='header'>
            <Link to="/"><Back></Back></Link>
            <p>Configuración</p>
            <div className='btnBox'></div>
      </header>
      <div className='conGen'>

        <div className='boxes'>
          <p className='conInputs texttr'>PERSONAL</p>
          <button className='conInputs'>Editar Perfil</button>
          <button className='conInputs'>Ubicación</button>
          <button className='conInputs'>Sincronizar calendario</button>
          <button className='conInputs'>Notificaciones</button>
          <button className='conInputs'>Medios de pago</button>
          <button className='conInputs'>Historial de compras</button>
        </div>

        <div className='boxes texttr'>
          <p className='conInputs'>SINCRONIZAR PREFERENCIAS</p>
          <button className='conInputs'>Sincronizar</button>
          <button className='conInputs'>Sincroniza tus salas favoritas</button>
          <button className='conInputs'>Sincroniza tus radios y podcast</button>
          <button className='conInputs'>Sincroniza tus revistas</button>
          <button className='conInputs'>Sincroniza tus contactos</button>
        </div>
        

      </div>
    </div>
    
  )
}

export default ConfigurationPage