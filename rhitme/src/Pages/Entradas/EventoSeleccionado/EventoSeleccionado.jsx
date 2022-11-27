import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Back from '../../../Components/Back/Back';
import NavBar from '../../../Components/NavBar/NavBar';
import './EventoSeleccionado.scss';


export default function EventoSeleccionado () {
  const [cantantes, setCantantes] = useState ({});
  const [conciertos, setConciertos] = useState();
  const [hour, setHours] = useState()
  

  useEffect(() => {
    const getData = async () => {
        const data = await axios.get(`http://localhost:9007/artists`);
        console.log(data);
        setCantantes(data.data[0]);
}
  getData();
  }, []);

//   useEffect(() => {
//     const getData = async () => {
//         const data = await axios.get(`http://localhost:9007/concerts`);
//         console.log(data);
//         setConciertos(data.data[0]);
// }
//   getData();
//   }, []);



  return (
    <div>

      <NavBar></NavBar>
      
      <header className='header'>
        <Link to="/entradas"><Back></Back></Link>
        <p>Entradas</p>
        <div className='btnBox'></div>
      </header>
      
      <div className='allContent'>


        <div className='eventDateImg'>

          <div className='singImgBox'>
            {conciertos?.map((concierto, index) => {
              return(
                <div key={index}>
                  <img className='singerImg' src={concierto?.data.hour} alt=''></img> 
                </div>
              )
            })}
          </div>

          <div className='singImgBox'>
            {conciertos?.map((concierto, index) => {
              return(
                <div key={index}>
                  <p className='singerImg'>{concierto?.hour}</p> 
                </div>
              )
            })}
          </div>
          

          <div className='infobox'>
            <h1 className='textSing textSing--title'>{cantantes?.name}</h1>
            <p className='textSing'>{conciertos?.date}</p>

            <div className='infoBajo'>

                  <div className='hourAndLike'>

                    <div className='iconAndHour'>
                      <img className='miniIcons' src='/hora.png' alt='hora'></img>
                      <p>{conciertos?.hour}</p>
                    </div>

                    <div className='iconAndHour'>
                        <img className='miniIcons' src='/euro.png' alt='precio'></img>
                        <p>{conciertos?.price}</p>
                    </div>
                    <div>
                      <img className='like' src='corazon.png' alt='me interesa'></img>
                    </div>

                  </div>
            </div>
            
        </div>
        <div className='buttonsBox'>
            <Link to="/comprarentrada1"><button className="btnShare btnShare--buy">Comprar</button></Link>
            
            <Link to="" ><button className='btnShare' >Compartir</button> </Link>
        </div>

          <div className='infoEvent'>
            <div>
              <p><img className='miniIcons miniIcons--small' src="/location.png"></img>{conciertos?.halls.name}</p>
              <p><img className='miniIcons miniIcons--small' src="/musica.png"></img>Soul / Funk</p>
              <p><img className='miniIcons miniIcons--small' src="/grabacion.png"></img>Judith Hill + Dr.Funk</p>
            </div>
          </div>

          <div className='infoConcert infoConcert--infoLarge'>
            <p className='texts'>
            {cantantes?.description}
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
