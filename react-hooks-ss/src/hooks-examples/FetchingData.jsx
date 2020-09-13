import React, {Fragment, useEffect, useReducer, useState} from 'react';
import axios from 'axios'
import '../App.scss';

//reducer for data fetching
const dataFetchReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_INIT':
			return {
				...state,
				isError: false,
				isLoading: true
			};
		case 'FETCH_SUCCESS':
			return {
				...state,
				data: action.payload,
				isError: false,
				isLoading: false
			};
		case 'FETCH_FAILURE':
			return {
				...state,
				isError: true,
				isLoading: false
			};
		default:
			throw new Error();
	}
}

//Custom hook for data fetching
const useHackerNewsApi = (initialData, initialURL) => {
	const [url, setUrl] = useState(initialURL);
	/*const [data, setData] = useState(initialData);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);*/
	//state
	const [state, dispatch] = useReducer(dataFetchReducer, {
		isLoading: false,
		isError: false,
		data: initialData
	})
	useEffect(() => {
		let didCancel = false; //abort data fetching

		const fetchData = async () => {
			dispatch({type: 'FETCH_INIT'});
			/*setIsError(false) // refresh error state
			setIsLoading(true) //starting preloader*/
			try {
				const result = await axios(url);
				if (!didCancel) dispatch({type: 'FETCH_SUCCESS', payload: result.data})
				//setData(result.data)
			} catch (error) {
				if (!didCancel) dispatch({type: 'FETCH_FAILURE'})
				//setIsError(true);
			}
			//setIsLoading(false) //ending preloader
		};
		fetchData();
		return () => {didCancel = true} // clean up function
	}, [url]);
	return [state, setUrl]
}

function FetchingData () {
	//state
	const [query, setQuery] = useState('tesla');
	// state
	const [{isLoading, isError, data}, doFetch] = useHackerNewsApi(
		{hits: []},
		`https://hn.algolia.com/api/v1/search?query=${query}`
	)
	console.log('Render-App');
	return (
		<Fragment>
			<form onSubmit={e => {
				e.preventDefault();
				doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
			}}>
				<input type="text" value={query} onChange={e => setQuery(e.target.value)}/>
				<button type='submit'>Search</button>
			</form>

			{isError && <div>Something went wrong...</div>}

			{isLoading
				? (<div>Loading...</div>)
				: (<ul>
					{data.hits.map(el => (
						<li key={el.objectID}>
							<a href={el.url} target='_blank' rel="noopener noreferrer">{el.title}</a>
						</li>))}
				</ul>)}
		</Fragment>
	);
}

export default FetchingData;
