import React, { useEffect, useState } from 'react'
import './ComprarEntrada1.scss';
import NavBar from '../../../Components/NavBar/NavBar'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Back from '../../../Components/Back/Back';


const ComprarEntrada1 = () => {

  const [cantantes, setCantantes] = useState ({});
  const {id} = useParams();

  useEffect(() => {
    const getData = async () => {
        const data = await axios.get(`http://localhost:9007/artists/${id}`);
        console.log(data);
        setCantantes(data.data); //el [0] luego se tiene que quitar
}
  getData();
  }, []);


  return (
    <div>
      <NavBar></NavBar>
      <header className='header'>
        <Link to="/entradas"><Back></Back></Link>
        <p>Entradas</p>
        <div className='btnBox'></div>
      </header>

      <div className="generalentradas1">
          <div className="comprarentradagrande">
            <div className="fotocomprarentrada1">

              <img className='fotico' src={cantantes?.image}></img>
              
              
              
            </div>
          </div>
          
          <div className='agrupacionmapa'>
            <div className="alineado">
            <h1 className='h1entradas1'>{cantantes?.name}</h1>

            
            {/* <h4>{conciertos?.halls.name}</h4>
               */}
              <div className="mapa">
                <img src='/mapa.png'></img>
              </div>
              <div className="precioyboton">
                <h1 className="precio">€ 25</h1>
                <Link to="/comprarentrada2" ><button className="comprarahora">Comprar ahora</button></Link>
              </div>
            </div>

          </div>

      </div>
    </div>
  )
}

export default ComprarEntrada1