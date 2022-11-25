import React from 'react'
import NavBar from '../../Components/NavBar/NavBar';
import './HomePage.scss';


const HomePage = () => {
  return (
    <div>
        <NavBar></NavBar>
        <div className='general'>

        <header className='header header--normal'>
        <p>RithMe</p>
        </header>

            <div className='grupobotones'>
                <button className='botonhome'>Conciertos</button>
                <button className='botonhome'>Amigos</button>
                <button className='botonhome'>Fan Club</button>
            </div>
            
            <div className='titulos'>
                <h1 className='h1'>¡Hola Sendoa!</h1>
                <h3 className='h3'>¿Qué concierto te apetece?</h3>
            </div>

            <div className='secction2'>
                <div className='divcompleto'>
                    <h4 className='h4'>ARTISTAS</h4>
                    <div className='galeria'>
                        <div className='individual'>
                        </div>

                        <div className='individual'>
                        </div>

                        <div className='individual'>
                        </div>

                        <div className='individual'>
                        </div>

                        <div className='individual'>

                        </div>
                    
                    </div>
                    
                </div>

                <div className='divcompleto'>
                    <h4 className='h4'>ESTILOS</h4>
                    <div className='galeria'>

                        <div className='individual'>
                        </div>

                        <div className='individual'>
                        </div>

                        <div className='individual'>
                        </div>

                        <div className='individual'>
                        </div>

                        <div className='individual'>
                        </div>
                    
                    </div>
                </div>

                <div className='divcompleto'>
                    <h4 className='h4'>SALAS</h4>
                    <div className='galeria'>
                        <div className='individual'>
                        </div>

                        <div className='individual'>
                        </div>

                        <div className='individual'>
                        </div>

                        <div className='individual'>
                        </div>

                        <div className='individual'>
                        </div>
                    
                    </div>
                </div>

                <div className='divcompleto'>
                    <h4 className='h4'>ONDAS</h4>
                    <div className='galeria'>
                        <div className='individual'>

                        </div>
                        <div className='individual'>

                        </div><div className='individual'>

                        </div>
                        <div className='individual'>

                        </div>
                        <div className='individual'>

                        </div>
                    
                    </div>
                </div>

                <div className='divcompleto divcompleto--last'>
                    <h4 className='h4'>REVISTAS</h4>
                    <div className='galeria'>
                        <div className='individual'>
                        </div>

                        <div className='individual'></div>

                        <div className='individual'>
                        </div>

                        <div className='individual'>
                        </div>

                        <div className='individual'>
                        </div>
                
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage