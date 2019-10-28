import React from 'react';
import { connect } from 'react-redux';
import './MovieCard.css';
import { bindActionCreators } from 'redux';
import { removeFavorite } from '../../Thunks/removeFavorite';
import { addFavorite } from '../../Thunks/addFavorite';

const MovieCard = ({ title, posterPath, releaseDate, voteAverage, overview, genre, isFavorite, id, currentUser, removeFavorite, addFavorite }) => {
  var borderStyle = {
    border: `3px solid ${genre.borderColor}`
  }
  var genreStyle = {
    background: `${genre.borderColor}`,
    borderRadius: '18px',
    margin: '6% auto',
    padding: '5px 15px',
    width: '11vw'
  }
  const favStatus = isFavorite ? { classVal: 'favorited', elem: <h3 className='like--btn'>Liked</h3> } : { classVal: 'not-favorited', elem: <h3 className='like--btn'>Like</h3> }
  return (
    <div className="movieCard" style={borderStyle}>
      <img className="moviePoster" src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={`${title} art`} />
      <div className="moviePosterOverlay">
        <div className="movieCardGenre">
          <h2 className="movieCardGenre" style={genreStyle}>{genre.name}</h2>
        <h1 className="movieCardTitle">     {title}</h1>
        </div>
        <footer className='footer--accents'>
          { isFavorite && <div className={`bottom-bar ${favStatus.classVal}`} onClick={() => removeFavorite(currentUser.id, id)}>
            {favStatus.elem}
            <h2>{voteAverage}</h2>
          </div>}
          { !isFavorite && <div className={`bottom-bar ${favStatus.classVal}`} onClick={() => addFavorite(currentUser.id, { id, title, poster_path: posterPath, release_date: releaseDate, vote_average: voteAverage, overview})}>
            {favStatus.elem}
            <h2>{`${voteAverage * 10}%`}</h2>
          </div>}        
        </footer>
      </div>
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({removeFavorite, addFavorite}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)