import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar';
import './HomePage.scss';
// import Slider from '../../Components/Slider/Slider';



export default function HomePage(){
    const [artists, setArtists] = useState()
    const [styles, setStyles] = useState()
    const [halls, setHalls] = useState()
    const [medias, setMedias] = useState()
    const [revistas, setRevistas] = useState()
    const sustitucionHombresG = "/hombres-g.jpg";
    const sustitucionLeiva = "/leiva.jpg";
    const sustitucionCarl = "/carl.jpeg";
    const sustitucionMaluma = "/maluma.jpeg";
    const sustitucionOrozco = "/orozco.jpeg";
    const sustitucionHouse = "/house.jpeg";
    const sustitucionWizink = "/wizink.jpeg"
    const sustitucionSanMames = "/sanmames.jpeg"
    const sustitucionApolo = "/apolo.webp"
    const sustitucionCustom = "/custom.jpeg"
    const sustitucionEslava = "/eslava.avif"


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
            const pepe = await axios.get(`http://localhost:9007/halls`);
            setHalls(pepe.data);
            console.log((pepe));
        }
        getHalls();
    }, [])

    useEffect(() => {
        const getMedias = async () => {
            const pepe = await axios.get(`http://localhost:9007/medias`);
            setMedias(pepe.data);
            console.log((pepe));
        }
        getMedias();
    }, [])

    useEffect(() => {
        const getRevistas = async () => {
            const pepe = await axios.get(`http://localhost:9007/revistas`);
            setRevistas(pepe.data);
            console.log((pepe));
        }
        getRevistas();
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
                                
                                   <div>
                                        <div key={index} className='individual'>
                                            <img className='singerPhoto' src={artist.image}></img>
                                            {artist.name === "Hombres G" ? artist.image = sustitucionHombresG : null}
                                            {artist.name === "Leiva" ? artist.image = sustitucionLeiva : null}
                                            {artist.name === "Carl Cox" ? artist.image = sustitucionCarl : null}
                                            {artist.name === "Maluma" ? artist.image = sustitucionMaluma : null}
                                            {artist.name === "Antonio Orozco" ? artist.image = sustitucionOrozco : null}
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
                                   <div>
                                        <div key={index} className='individual'>
                                            <img className='singerPhoto' src={style.genre.image}></img>
                                            {style.genre.name === "House" ? style.genre.image = sustitucionHouse : null}
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
                                   <div>
                                        <div key={index} className='individual'>
                                            <img className='singerPhoto' src={sala.image}></img>
                                            {sala.name === "WiZink Center" ? sala.image = sustitucionWizink : null}
                                            {sala.name === "Estadio San Mamés" ? sala.image = sustitucionSanMames : null}
                                            {sala.name === "Sala Apolo" ? sala.image = sustitucionApolo : null}
                                            {sala.name === "Sala Custom" ? sala.image = sustitucionCustom : null}
                                            {sala.name === "Teatro Eslava" ? sala.image = sustitucionEslava : null}
                                        </div>
                                  
                                    </div>
                                )
                            })}
                    </div>
                </div>

                <div className='divcompleto'>
                    <h4 className='h4'>ONDAS</h4>
                    <div className='galeria'>
                            {medias?.map((emisora, index) => {
                                return(
                                   <div>
                                        <div key={index} className='individual'>
                                            <img className='singerPhoto' src={emisora.image}></img>
                                        </div>
                                  
                                    </div>
                                )
                            })}
                    </div>
                </div>

                <div className='divcompleto divcompleto--last'>
                    <h4 className='h4'>REVISTAS</h4>
                    <div className='galeria'>
                            {revistas?.map((revista, index) => {
                                return(
                                   <div>
                                        <div key={index} className='individual'>
                                            <img className='singerPhoto' src={revista.image}></img>
                                            {revista.nameONDAS === "Radio Marca" ? revista.image : null}
                                        </div>
                                  
                                    </div>
                                )
                            })}
                    </div>
                </div>
               

                
            </div>
        </div>
    </div>
  )
}


