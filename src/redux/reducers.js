
function songs(state = {}, action) {
	switch (action.type) {
		case 'REQUEST_SONGS':
			return {...state,
        loading: true,
        searchResults: []
			}
		case 'RECEIVE_SONGS':
      const result = {...state,
					loading: false,
					searchResults: [...Object.values(action.searchResults)[0].items]
				}
				console.log(result.searchResults[0].images)
				return result;
		default:
			return state;
	}
}

export default songs