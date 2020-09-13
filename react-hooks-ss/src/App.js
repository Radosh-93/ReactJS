import React, {Fragment} from 'react';
import './App.scss';
import {NavLink, Route} from "react-router-dom";
import FetchingData from "./hooks-examples/FetchingData";

function App() {

	return (
		<Fragment>
			<NavLink to='/fetch-data'>Fetch Data</NavLink>
			<Route path='/fetch-data' render={() => <FetchingData/>}/>
		</Fragment>
	);
}

export default App;
