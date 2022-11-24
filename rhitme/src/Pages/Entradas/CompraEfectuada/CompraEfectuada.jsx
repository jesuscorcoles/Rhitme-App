import React from 'react'
import BotonCierre from '../../../Components/BotonCierre/BotonCierre';
import './CompraEfectuada.scss';

const CompraEfectuada = () => {
  return (
    <div className='background'>
      <BotonCierre></BotonCierre>
      <div className='compraefectuada'>
       <div className='agrupatexto'> 
        <h1>¡Genial Sandoa!</h1>
        <h4>Que disfrutes del concierto</h4>
      </div>
      <div className='agrupatexto'>
        <h4>RYTHME te ha envíado un correo</h4>
        <h4>con tu entrada y comprobante.</h4>
      </div>
      <div className='agrupatexto'>
        <h4>¿Quieres además</h4>
        <h4>incluir el eventeo a tu calendario?</h4>
      </div>
        <button className='boton'>Quiero incluirlo ahora</button>
        <h4>Más tarde</h4>
      </div>
    </div>
  )
}

export default CompraEfectuada