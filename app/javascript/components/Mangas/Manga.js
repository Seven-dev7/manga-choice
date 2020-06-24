import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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
                <Link to={`/mangas/${props.attributes.slug}`}>
                    Voir Manga
                </Link>
            </div>
        </div>
    )
}




export default Manga;