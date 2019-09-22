import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'bleeblop';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {

    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }
    //fetch to recent reviews happens here
    componentDidMount() {
        this.fetchReviews()
    }

    fetchReviews = async () => {
        let myFetch = await fetch(URL)
        let data = await myFetch.json()
        let movieReviews = data.results
        this.updateReviews(movieReviews)
    }

    updateReviews = async (movieReviews) => {
        this.setState({
            reviews: [...movieReviews]
        }, () => console.log("reviews in state", this.state.reviews))
    }

    // fetchReviews = () => {
    //     fetch(URL)
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({
    //                 reviews: [...data.results]
    //             }, () => console.log("reviews in state", this.state.reviews))
    //         })
    // }

    render() {
        return (
            <div className="latest-movie-reviews">
                {this.state.reviews.map((review, index) => {
                    return <MovieReviews key={index} reviewData={review}/>
                })}
            </div>
        )
    }
}

export default LatestMovieReviewsContainer