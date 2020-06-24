import React from 'react';

const Header = (props) => {
    const {name, image_url, avg_score} = props.attributes
    const total = props.reviews.length
    return(
        <div className="wrapper">
            <h1>
                <img src={image_url} alt={name} />
                {name}
            </h1>
            <div className="totalReviews">
                {total} User Reviews
            </div>
            <div className="starRating">

            </div>
            <div className="totalOutof">
                {avg_score}
            </div>
        </div>
    )
}

export default Header;