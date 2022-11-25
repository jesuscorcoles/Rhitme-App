import React from 'react'
import Back from '../../../Components/Back/Back';
import BotonCierre from '../../../Components/BotonCierre/BotonCierre';
import NavBar from '../../../Components/NavBar/NavBar';
import './EventoSeleccionado.scss';


const EventoSeleccionado = () => {
  return (
    <div>
      <NavBar></NavBar>
    
      <header className='header'>
      <p className='headertext'>Entradas</p>
      <Back></Back>
      </header>
      
      <div className='allContent'>

        <div className='eventDateImg'>

          <img className='singerImg' src='' alt='event image'></img>
        
          <div className='infobox'>

            <h1 className='textSing textSing--title'>Judith Hill</h1>
            <p className='textSing'>08 Noviembre 2022</p>
            
            <div className='infoBajo'>

              <div className='hourAndLike'>

                <div className='iconAndHour'>
                  <img className='miniIcons' src='/hora.png' alt='hora'></img>
                  <p>22:00</p>
                </div>
                <div className='iconAndHour'>
                  <img className='miniIcons' src='/euro.png' alt='euro'></img>
                  <p>25€</p>
                </div>
              </div>

                <div>
                <img className='like' src='corazon.png' alt='me interesa'></img>
                </div>

            </div>
          </div>
        </div>

        <div className='buttonsBox'>
          <button className='button'>Comprar</button> 
          {/* sustituir por componenete boton alberto */}
          <button className='button'>Compartir</button> 
        </div>

        <div className='infoConcert'>

          <div>
            <p><img className='miniIcons miniIcons--small' src="/location.png"></img>SALA CLAMORES - MADRID</p>

            <p><img className='miniIcons miniIcons--small' src="/musica.png"></img>Soul / Funk</p>

            <p><img className='miniIcons miniIcons--small' src="/grabacion.png"></img>Judith Hill + Dr.Funk</p>

          </div>

          <div className='asisten'>
            <p>16 asistirán</p>
            <p>4 amigos</p>
          </div>

        </div>
        <div className='infoConcert infoConcert--infoLarge'>
          <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
          </p>

        </div>

      </div>

    </div>
  )
}

export default EventoSeleccionado