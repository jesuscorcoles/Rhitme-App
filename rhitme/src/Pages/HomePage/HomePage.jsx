import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar';
import './HomePage.scss';
// import Slider from '../../Components/Slider/Slider';



export default function HomePage(){
    const [artists, setArtists] = useState()
    const [styles, setStyles] = useState()
    const [halls, setHalls] = useState()

    useEffect(() => {
        const getArtists = async () => {
            const pepe = await axios.get(`http://localhost:9007/artists`);
            setArtists(pepe.data);
            console.log((pepe));
        }
        getArtists();
    }, [])

    useEffect(() => {
        const getStyles = async () => {
            const pepe = await axios.get(`http://localhost:9007/artists`);
            setStyles(pepe.data);
            console.log((pepe));
        }
        getStyles();
    }, [])

    useEffect(() => {
        const getHalls = async () => {
            const pepe = await axios.get(`http://localhost:9007/artists`);
            setHalls(pepe.data);
            console.log((pepe));
        }
        getHalls();
    }, [])


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
                            {artists?.map((artist, index) => {
                                return(
                                
                                   <div className='slide'>
                                        <div key={index} className='individual'>
                                            <img className='singerPhoto' src={artist.image}></img>
                                        </div>
                                  
                                    </div>
                                
                                )
                            })}
                    
                    </div> 
                </div>

                <div className='divcompleto'>
                    <h4 className='h4'>ESTILOS</h4>
                    <div className='galeria'>
                            {styles?.map((style, index) => {
                                return(
                                
                                   <div className='slide'>
                                        <div key={index} className='individual'>
                                            <img className='singerPhoto' src={style.genre.image}></img>
                                        </div>
                                  
                                    </div>
                                
                                )
                            })}
                    </div> 
                </div>

                <div className='divcompleto'>
                    <h4 className='h4'>SALAS</h4>
                    <div className='galeria'>
                            {halls?.map((sala, index) => {
                                return(
                                
                                   <div className='slide'>
                                        <div key={index} className='individual'>
                                            <img className='singerPhoto' src={sala.concerts.hall}></img>
                                        </div>
                                  
                                    </div>
                                
                                )
                            })}
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


