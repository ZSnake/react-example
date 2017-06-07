import 'whatwg-fetch';
import config from '../config.json';

const baseUrl = 'https://api.spotify.com/v1';
const search = (searchTerms) =>
	fetch(`${baseUrl}/search?q=${searchTerms.q}&type=${searchTerms.type}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
      Authorization: `Bearer ${config.spotifyToken}`
		},
	});


export default {
	search,
};