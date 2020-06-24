import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Header from './Header'
import ReviewForm from './ReviewForm'
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

const handleChange = (e) => {
    e.preventDefault()

    setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
}

const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').textContent
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const manga_id = manga.data.id
    axios.post('/api/v1/reviews', {review, manga_id})
    .then ( resp => {
        const included = [...manga.included, resp,data]
        setManga({...manga, included})
        setReview({title: '', score: 0})
    } )
    .catch ( resp => {} )
}

const setRating = (score, e) => {
    e.preventDefault()

    setReview({...review, score})
}

    return(
        <Wrapper>
            {
                loaded &&
                <Fragment>
                    <Column>
                        <Main>
                            <Header
                                attributes={manga.data.attributes}
                                reviews={manga.included}
                            />
                        <div className="reviews">
                            
                        </div>
                        </Main>
                    </Column>
                    <Column>
                        <ReviewForm
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            setRating={setRating}
                            attributes={manga.data.attributes}
                            review={review}
                        />
                    </Column>
                </Fragment>
            }
        </Wrapper>
    )
}

export default Manga;