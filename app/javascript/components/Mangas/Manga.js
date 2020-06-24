import React, { Component } from 'react';


const Manga = (props) => {
    return(
        <div className="card">
            <div className="manga-logo">
                <img src={props.attributes.image_url} alt={props.attributes.name} />
            </div>
            <div className="manga-name">
                {props.attributes.name}
            </div>
            <div className="manga-score">
                {props.attributes.avg_score}
            </div>
            <div className="manga-link">
                <a href={`/mangas/${props.attributes.slug}`}>
                    Voir Manga
                </a>
            </div>
        </div>
    )
}




export default Manga;