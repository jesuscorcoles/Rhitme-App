import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './ConcertsAvailable.scss';
import { Link } from 'react-router-dom'


export default function ConcertsAvailable () {

    const [allSingers, setAllSingers]= useState([]);

    
    useEffect(() => {
        const getSinger = async () => {
            const {data} = await axios.get (``);
            setAllSingers(data);
            
        };

        getSinger();

    }, []);

    return (
        <div className='genBox'>

                <div className='date'> 8 Diciembre 2022</div>

                <div className='eventBox'>

                    
                    <img className='img' src='/fotoprueba.png'></img>

                    <div>
                        <div className='place'><p>Lugar del concierto/Ciudad</p></div>

                        <div className='nameAndButton'>
                            <div className='singerName'>Cantonto</div>
                           <Link  to="/eventoseleccionado"> <button className='btn'>Comprar</button></Link>
                        </div>

                        <div className='place' >Genero</div>

                        <div className='infoBox'>
                            <p>12 asistirán</p>
                            <p>4 amigos</p>
                            <p>25€</p>
                        </div>

                    </div>

                    
                </div>
            

        </div>
    )
}