import React, { useEffect, useState } from 'react'
import './ComprarEntrada1.scss';
import NavBar from '../../../Components/NavBar/NavBar'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Back from '../../../Components/Back/Back';



const ComprarEntrada1 = () => {

  const [cantantes, setCantantes] = useState ({});
  const [conciertos, setConciertos] = useState();
  const sustitucionCarl = "/carl.jpeg";
  const [mapas, setMapa] = useState();



  useEffect(() => {
    const getData = async () => {
        const data = await axios.get(`http://localhost:9007/artists`);
        console.log(data);
        setCantantes(data.data[0]);
}
  getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
        const data = await axios.get(`http://localhost:9007/concerts`);
        console.log(data);
        setConciertos(data.data[0]);
}
  getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
        const data = await axios.get(`http://localhost:9007/halls`);
        console.log(data);
        setMapa(data.data[0]);
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
              {cantantes.name === "Carl Cox" ? cantantes.image = sustitucionCarl : null}

              {/* <div className="imagenpequeña"></div> */}
              
            </div>
          </div>
          
          <div className='agrupacionmapa'>
            <div className="alineado">
            
              <div className='agrupah'>
                <h1 className='h1entradas1'>{cantantes?.name}</h1>
                <h4>{conciertos?.halls.name}</h4>
              </div>

                {/* <div className="mapa" style={{width: "100%"}}><iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=calle%20arenal%2011,%20madrid+(joyeslava)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">Car GPS</a></iframe></div> */}

                  <div className="mapa" style={{width: "100%"}}><iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=avenida%20de%20la%20industria%2082,%20humanes%20de%20madrid+(fabrik)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/"></a></iframe></div>
              
              <div className="precioyboton">
                <h1 className="precio">€ 25</h1>
                <Link to="/comprarentrada2"><button className="comprarahora">Comprar ahora</button></Link>
              </div>
            </div>

          </div>

      </div>
    </div>
  )
}

export default ComprarEntrada1