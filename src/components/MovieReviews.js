// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
    // console.log("props", props)
    // debugger
    let { byline, display_title, headline, publication_date, summary_short} = props.reviewData
    return (
        <div className="review-list">
            <div className="review">
                <ul>
                    <li>{byline}</li>
                    <li>{display_title}</li>
                    <li>{headline}</li>
                    <li>{publication_date}</li>
                    <li>{summary_short}</li>
                </ul>
            </div>
        </div>
    )
}

export default MovieReviews