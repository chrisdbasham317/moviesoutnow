import React from 'react';
import './MoviePage.css'
import { connect } from 'react-redux'


const MoviePage = ({ movies, genres, currentMovie}) => {
    
    const { title, poster_path, backdrop_path, release_date, vote_average, vote_count, overview, genre_ids, id } = movies.find( movie => movie.id === currentMovie)
   
    const getGenres = genres.reduce( (acc, genre) => {
        genre_ids.forEach( movieGenre => {
            if ( genre.id ===  movieGenre)
            acc.push(genre.name)
        })
        return acc
    }, [])
  

    return (
        <div className="moviePage__div" key={id}>
            <img 
                src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} 
                alt={`${title} Back Drop`}
                className="moviePage--backdrop" />
            <div className="movie--poster--details__div">
                <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`} 
                alt={`${title} Poster`}
                className="moviePage--poster" />
                <div className="movie__details">
                    <div className="movie--title--year">
                        <h3 className="movie--title">{title}</h3>
                        <p className="movie--year">{release_date.split('-')[0]}</p>
                    </div>
                    <div className="movie--user--score--fav--votes">
                        <p className="movie--score">User Score: {vote_average * 10}</p>
                        <p className="movie--favorited">Fav</p>
                        <p className="movie--vote">Votes: {vote_count}</p>
                    </div>
                    <p className="movie--overview">{overview}</p>
                    <div className="movie--genres">{getGenres}</div>
                </div>
            </div>
        </div>
    ) 
}

const mapStateToProps = ({ movies, genres, currentMovie}) => ({ movies, genres, currentMovie })

export default connect(mapStateToProps, null)(MoviePage)