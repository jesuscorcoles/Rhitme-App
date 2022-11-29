import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Back from '../../../Components/Back/Back';
import NavBar from '../../../Components/NavBar/NavBar';
import './TicketDetail.scss';


const TicketDetail = () => {
  const [tickets, setTickets] = useState ({});
  const {id} = useParams();

  useEffect(() => {
    const getData = async () => {
        const data = await axios.get(`http://localhost:9007/artists/`);
        console.log(data);
        setTickets(data.data); //el [0] luego se tiene que quitar
}
  getData();
  }, []);


  return (
    <div className='todo'>
      <header className='header'>

          <Link to="/"><Back></Back></Link>
          <p>Mis Conciertos</p>
          <div className='btnBox'></div>
      </header>
        <NavBar></NavBar>
      <div className='gentick'>
        <div className='imagInfo'>

          <div className='phot'>
          <img className='ims' src="/leiva.jpg" alt=''></img>
          </div>

          <div className='pot'>
          <div className='singImgBox'>

</div>

<div className='infobox'>
<h1 className='textSing textSing--title'>Leiva</h1>
<p className='textSing'>08 Noviembre</p>

      <div className='hourAndLike'>

        <div>

          <div className='iconAndHour'>
              <img className='miniIcons' src='/hora.png' alt='hora'></img>
              <p>20:00 h</p>
          </div>

          <div className='iconAndHour'>
              <img className='miniIcons' src='/euro.png' alt='precio'></img>
              <p>25€</p>
          </div>
        
        </div>
      </div>
</div>
          </div>
        </div>

        <div className='infoBoes'>

        <div className='infocon'>
          <h2>Leiva</h2>
          <p>en Teatro Eslava</p>
          <p>c/ Arenal nº 11, 28010 MADRID</p>
          <p>Apertura de puertas: 19:00 h</p>
        </div>


         <div className='qrbox'>
          <img className='qr' src='/qr.png'></img>
        </div>
        </div>

       

      </div>

    </div>
  )
}

export default TicketDetail