import spotifyService from '../services/spotifyService';

export const REQUEST_SONGS = 'REQUEST_SONGS';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';

export function requestSongs(searchTerms) {
  return {
    type: REQUEST_SONGS,
    searchTerms
  }
}

export function receiveSongs(searchResults) {
  return {
    type: RECEIVE_SONGS,
    searchResults
  }
}

export function fetchSongs(searchTerms) {
  return function(dispatch){
    dispatch(requestSongs(searchTerms));
    return spotifyService.search(searchTerms)
    .then(response => response.json())
    .then(parsedResponse => {
      dispatch(receiveSongs(parsedResponse))
    });
  }
}