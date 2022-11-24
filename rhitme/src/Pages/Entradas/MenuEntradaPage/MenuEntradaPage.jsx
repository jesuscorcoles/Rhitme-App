import React from 'react'
import ConcertsAvailable from './ConcertsAvailable/ConcertsAvailable';
import './MenuEntradaPage.scss';


const MenuEntradaPage = () => {
  return (

    <div className='general'>

      <header className='header'></header>
      <div className='grupobotones'>
            <button className='botonhome'>Artistas</button>
            <button className='botonhome'>Eventos</button>
            <button className='botonhome'>Salas</button>
        </div>
        <div>
          <div date>

          </div>
          <div slider con conciertos disponibles en ese date>
          <ConcertsAvailable></ConcertsAvailable>
          </div>
        </div>
   
    </div>
  )
}

export default MenuEntradaPage