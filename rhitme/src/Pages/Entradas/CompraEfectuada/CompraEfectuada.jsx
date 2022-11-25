import React from 'react'
import './CompraEfectuada.scss';
import { useNavigate } from "react-router-dom";

export default function CompraEfectuada(){
const navigate = useNavigate();

  return (
    <div>
      <div className='colocacioncierre'>
      <input type='image' src='/marca-x.png' className='botoncierre' onClick={() => navigate("/")}></input>
      </div>
        
      <div className='backgroundefectuada'>
        {/* <BotonCierre></BotonCierre> */}
        
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
          <botton className='h4compraefectuada' onClick={() => navigate("/entradas")}>Más tarde</botton>
        </div>
      </div>
    </div>
  )
}
