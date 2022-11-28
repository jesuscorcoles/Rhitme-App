import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import NavBar from '../../../Components/NavBar/NavBar';
import './Conciertos.scss';
import Back from '../../../Components/Back/Back';


export default function Conciertos(){
  const [conciertos, setConcerts] = useState ({});
  const {id} = useParams();

  useEffect(() => {
    const getData = async () => {
        const data = await axios.get(`http://localhost:9007/concerts`);
        console.log(data);
        setConcerts(data.data);
    };
  getData();
  }, []);

  return (
    <div>
      <header className='header'>
          <Link to="/entradas"><Back></Back></Link>
          <p>Entradas</p>
          <div className='btnBox'></div>
      </header>
      
      {conciertos?.map((concierto, index) => 
      <div className='infobox'>
          <h1 className='textSing textSing--title'>{concierto?.name}</h1>
          <p className='textSing'>{concierto?.date}</p>
          <div className='hourAndLike'>

            <div>
              <div className='iconAndHour'>
                <img className='miniIcons' src='/hora.png' alt='hora'></img>
                <p>{concierto?.hour}</p>
              </div>
              <div className='iconAndHour'>
                <img className='miniIcons' src='/euro.png' alt='precio'></img>
                <p>{concierto?.price}</p>
              </div>
            </div>
            <div>
              <img className='like' src='corazon.png' alt='me interesa'></img>
            </div>
          </div>
      </div>
      )
      }
      
      <NavBar></NavBar>
    </div>
  )
}