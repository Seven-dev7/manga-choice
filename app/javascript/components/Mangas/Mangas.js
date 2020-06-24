import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Manga from './Manga';
import styled from 'styled-components';

const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto
`
const Header = styled.div`
    padding: 100px 100px 10px 100px;

    h1 {
        font-size: 42px;
    }
`
const Subheader = styled.div`
    font-weight: 300;
    font-size: 26px;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`

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
        <Home>
            <Header>
                <h1>Manga Choice</h1>
                <Subheader>
                    Welcome to Manga Choice
                </Subheader>
            </Header>
            <Grid>
                {grid}
            </Grid>
        </Home>
    )
}

export default Mangas;