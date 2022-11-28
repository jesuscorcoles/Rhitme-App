import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Back from '../../../Components/Back/Back';
import NavBar from '../../../Components/NavBar/NavBar';
import './EventoSeleccionado.scss';

export default function EventoSeleccionado () {
  const [cantantes, setCantantes] = useState ();
  const {id} = useParams();

  useEffect(() => {
    const getData = async () => {
        const data = await axios.get(`http://localhost:9007/artists/${id}`);
        console.log(data);
        setCantantes(data.data);
    };
  getData();
  }, []);
  
  return (
    <div className='allContent'>
      <NavBar></NavBar>
      <header className='header'>
          <Link to="/entradas"><Back></Back></Link>
          <p>Entradas</p>
          <div className='btnBox'></div>
      </header>
      <div className='eventDateImg'>
            <div className='singImgBox'>
              <img className='singerImg' src={cantantes?.image} alt=''></img>
            </div>
            <div className='infobox'>
              <h1 className='textSing textSing--title'>{cantantes?.name}</h1>
              <p className='textSing'>{cantantes?.concerts.date}</p>

                    <div className='hourAndLike'>
                      <div>
                        <div className='iconAndHour'>
                            <img className='miniIcons' src='/hora.png' alt='hora'></img>
                            <p>{cantantes?.concerts.hour}</p>
                        </div>
                        <div className='iconAndHour'>
                            <img className='miniIcons' src='/euro.png' alt='precio'></img>
                            <p>{cantantes?.concerts.price}</p>
                        </div>
                      </div>
                        <div>
                          <img className='like' src='/corazon.png' alt='me interesa'></img>
                        </div>
                    </div>
            </div>
          </div>
          <div className='infoabajo'>
            <div className='buttonsBox'>

                <Link to="/comprarentrada1"><button className="btnShare btnShare--buy">Comprar</button></Link>
                <Link to="" ><button className='btnShare'>Compartir</button> </Link>
            </div>
            <div className='infoEvent'>
                  <div>
                    <p><img className='miniIcons miniIcons--small' src="/location.png"></img>{cantantes?.halls.name}</p>
                    <p><img className='miniIcons miniIcons--small' src="/musica.png"></img>{cantantes?.name}</p>
                    <p><img className='miniIcons miniIcons--small' src="/grabacion.png"></img>{cantantes?.concerts.hour} h</p>

                  </div>
            </div>
            <div className='infoConcert infoConcert--infoLarge'>
                <p className='texts'>
                {cantantes?.description}
                </p>
            </div>
      </div>
    </div>
  )
}