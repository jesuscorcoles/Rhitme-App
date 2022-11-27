import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './ConcertsAvailable.scss';
import { Link } from 'react-router-dom'


export default function ConcertsAvailable () {

    const [singers, setSingers] = useState()
    // const [salas, setSalas] = useState()

    useEffect(() => {
        const getSingers = async () => {
            const pepe = await axios.get(`http://localhost:9007/artists`);
            setSingers(pepe.data);
        }
        getSingers();

    }, [])

    return (
        <div className='genBox'>

            <div>
                {singers?.map((singer, index) => {

                    return(
                        <div>  
                            <div className='date'>{singer.concerts.date}</div>
                            <div key={index} className="eventBox">

                                <div className='imgBox'>
                                    <img className='img' src={singer.image}></img>
                                </div>

                                <div className='rightblock'>

                                <div className='placebox'>
                                <div className='place'>{singer.halls.name}</div>
                                </div>

                                <div className='nameAndButton'>
                                
                                <div className='singerName'>{singer.name}</div>

                                <Link  to="/entradas/:artistName"> <button className='btn'>Info</button></Link>
                                
                                </div>
                                
                                <div className='infoBox'>
                                    <div className='genre'>
                                    <img className='miniIcons' src='musica.png'></img>{singer.genre.name}</div>
                                    <p className='price'>{singer.concerts.price}</p>
                                </div>
                                
                                </div>
                                

                            </div>
                            <div className='line'></div>
                        </div>                                    
                    )
                })}
            
            </div>
                                            
        </div> 

    )
}