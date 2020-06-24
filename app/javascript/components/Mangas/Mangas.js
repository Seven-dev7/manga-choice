import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Manga from './Manga';

const Mangas = () => {
    const [mangas, setMangas] = useState([])

    useEffect(()=> {
        // Get all of ou Mangas from api
        // Update Mangas in our state
        axios.get('/api/v1/mangas.json')
        .then( resp => {
            setMangas(resp.data.data)
        })
        .catch( resp => console.log(resp) )
    }, [mangas.length])


    const grid = mangas.map( mg => {
        return(
            <Manga 
                key={mg.attributes.name}
                attributes= {mg.attributes}
            />
        )
    }) 


    return(
        <div className="home">
            <div className="header">
                <h1>Manga Choice</h1>
                <div className="subheader">Welcome to Manga Choice</div>
            </div>
            <div className="grid">
                <ol>
                    {grid}
                </ol>
            </div>
        </div>
    )
}

export default Mangas;