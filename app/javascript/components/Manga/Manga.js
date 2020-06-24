import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr)
`
const Column = styled.div`
    background: #fff;
    height: 100vh;

    &:last-child {
        background: #000;
    }
`
const Main = styled.div`
    padding-left: 50px;
`

const Manga = (props) => {
    const [manga, setManga] = useState({})
    const [review, setRanga] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const slug = props.match.params.slug
        const url = `/api/v1/mangas/${slug}`

        axios.get(url)
        .then( resp => {
            setManga(resp.data)
            setLoaded(true)    
        })
        .catch( resp => console.log(resp) )
        // api/v1/mangas/kingdom
        // mangas/kingdom
    }, [])

    return(
        <Wrapper>
            <Column>
                <Main>
                {
                    loaded &&
                    <Header
                        attributes={manga.data.attributes}
                        reviews={manga.included}
                    />
                }
                <div className="reviews">
                    
                </div>
                </Main>
            </Column>
            <Column>
                <div className="review-form">
                    Review comes here
                </div>
            </Column>
            This is Manga#Show view
        </Wrapper>
    )
}

export default Manga;