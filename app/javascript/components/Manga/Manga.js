import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header'

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
        <div className="wrapper">
            <div className="column">
                {
                    loaded &&
                    <Header
                        attributes={manga.data.attributes}
                        reviews={manga.included}
                    />
                }               
                <div className="reviews">

                </div>
            </div>
            <div className="column">
                <div className="review-form">
                    Review comes here
                </div>
            </div>
            This is Manga#Show view
        </div>
    )
}

export default Manga;