import { isLoading, hasErrored } from '../Actions'
import { fetchFavorites } from './fetchFavorites';

export const removeFavorite = (event, id, movieId) => {
  event.stopPropagation();
  event.preventDefault();
  const options = {
    method: 'DELETE',
    headers: {
      "Content-Type": 'application/json'
    }
  };
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(`http://localhost:3001/api/v1/users/${id}/moviefavorites/${movieId}`, options)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false));
      dispatch(fetchFavorites(id));
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}