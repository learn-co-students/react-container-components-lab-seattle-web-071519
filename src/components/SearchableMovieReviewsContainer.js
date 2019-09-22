import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'bloopity';
const URL_START = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';
const URL_END = `&api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: "",
            searchResults: []
        }
    }

    //fetch with search term
    
    fetchSearch = async (e) => {
        e.preventDefault()
        e.target.parentElement.reset()

        debugger
        let searchTerm = this.state.searchTerm
        let fullUrl = URL_START + `${searchTerm}` + URL_END
        console.log(fullUrl)
        let myFetch = await fetch(fullUrl)
        // console.log(myFetch)
        let data = await myFetch.json()
        // console.log("came back from fetch", data)
        let movieResults = data.results
        // console.log("results", movieResults)
        this.updateResults(movieResults)
    }

    updateResults = async (movieResults) => {
        // debugger
        this.setState({
            searchResults: [...movieResults]
        }, () => console.log("hey there", this.state.searchResults))
    }

    handleChange = (e) => {
        // debugger
        let searchTerm = e.target.value
        this.setState({
            searchTerm: searchTerm
        }, () => console.log("searchy", this.state.searchTerm))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form>
                    <input type="search" onChange={this.handleChange}></input>
                    <button onClick={this.fetchSearch}>Search</button>
                </form>

                {this.state.searchResults.map((review, index) => {
                    return <MovieReviews reviewData={review} key={index}/>
                })}
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer