import React from 'react'
import './ComprarEntrada1.scss';
import NavBar from '../../../Components/NavBar/NavBar'


const ComprarEntrada1 = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="general">
        <header className='header'></header>
          <div className="comprarentradagrande">
            <div className="fotocomprarentrada1">
              <div className="imagenpequeña">

              </div>
            </div>
            <h1>Judith Hill</h1>
          </div>
          
          <div>
            <div className="alineado">
              <h4>en SALA CLAMORES</h4>
              <h5>Calle de...</h5>
              <div className="mapa">

              </div>
              <div className="precioyboton">
                <h1 className="precio">€ 25</h1>
                <button className="comprarahora">Comprar ahora</button>
              </div>
            </div>

          </div>

      </div>
    </div>
  )
}

export default ComprarEntrada1