import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { hasErrored } from './hasErrored';
import { movies } from './movies';
import { genres } from './genres';
import { currentUser } from './currentUser';
import { toggleModal } from './toggleModal';
import { favorites } from './setFavorites';
import { currentMovie } from './currentMovie'

export const rootReducer = combineReducers({
  isLoading,
  error: hasErrored,
  movies,
  genres,
  currentUser,
  toggleModal,
  favorites,
  currentMovie
})



