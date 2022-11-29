import React from 'react'
import './CompraEfectuada.scss';
import { Link, useNavigate } from "react-router-dom";

export default function CompraEfectuada(){
const navigate = useNavigate();

  return (
    <div>
      <div className='colocacioncierre'>

      <Link to="/">
      <img className='botoncierre' src='/marca-x.png'></img>
      </Link>

      </div>
        
      <div>
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
          <h4>¿Quieres ver tu ticket?</h4>
        </div>
          <Link to="/ticketdetail"><button className='boton'>Si, ver mis conciertos</button></Link>
          <Link to="/"><botton className='h4compraefectuada' onClick={() => navigate("/entradas")}>Más tarde</botton></Link>
        </div>
      </div>
    </div>
  )
}
