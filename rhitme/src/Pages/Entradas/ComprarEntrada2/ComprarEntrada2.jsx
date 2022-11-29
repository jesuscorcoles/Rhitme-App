import React from 'react'
import './ComprarEntrada2.scss';
import { Link } from 'react-router-dom';
import Back from '../../../Components/Back/Back';

const ComprarEntrada2 = () => {
  return (
    <div className='absoluto'>
      <header className='header'>
        <Link to="/comprarentrada1"><Back></Back></Link>
        <p>Entradas</p>
        <div className='btnBox'></div>
      </header>
      <div className='generalentradas2'>
        <div className='grandeentrada2'>
          <div className='cabeceraentrada2'>
            <div className='compraentradas2'>
              <div className='cabecera'>
                <h3>Comprar tus entradas</h3>
              </div>
              <div className='ajustecompraentrada2'>
              <h4 className='h4compraentradas2'>Entrada General: 25€</h4>
              <input className='inputcomprarentrada2' placeholder='Número de entradas'></input>
              <h5 className='h5comprarentrada2'>Gastos de gestión: 0,90€</h5>
              <span className='separador'></span>
              <h4 className='alinea'>Total: 25,9€</h4>
              </div>
              <h3 className='datoscompraentradas2'>Datos del comprador</h3>
              <input className='inputcomprarentrada2 separaciondatos' placeholder='Nombre y apellidos'></input>
              <input className='inputcomprarentrada2 separaciondatos' placeholder='Email'></input>
              <input className='inputcomprarentrada2 separaciondatos' placeholder='Cod. Postal'></input>
              <h3 className='datoscompraentradas2'>Pago con tarjeta</h3>
              <input className='inputcomprarentrada2 separaciondatos' placeholder='Nº Tarjeta'></input>
              <div className='divtarjeta alinea'>
                <input className='datostarjeta' placeholder='mes / año'></input>
                <input className='datostarjeta' placeholder='CVV'></input>
              </div>
              <input className='inputcomprarentrada2 separaciondatos' placeholder='Titular'></input>

              <div className='btnpagarbox'>
              <Link to="/compraefectuada"><button className='botoncomprarentrada2'>Pagar</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}
export default ComprarEntrada2